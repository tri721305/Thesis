import * as React from "react";
import PropTypes from "prop-types";

import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from "xterm-addon-web-links";
import { AttachAddon } from "xterm-addon-attach";

class PFTerm extends React.Component {
  state = {
    socketError: false,
  };

  constructor(props) {
    super(props);
    this.options = props.options;
    this.terminalRef = React.createRef();
    this.dispose = props.dispose | false;
    this.uniqueId = props.uniqueId;
    this.userToken = props.userToken;
    this.connectUrl = props.connectUrl;
    this.subToken = props.subToken;

    // func
    this.onMessage = this.onMessage.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSocketClosed = this.onSocketClosed.bind(this);

    this.setupTerminal();
  }

  setupTerminal() {
    this.fitAddon = new FitAddon();
    this.webLinksAddon = new WebLinksAddon();
    // Setup the XTerm terminal.
    this.term = new Terminal({
      ...this.options,
      cursorBlink: true,
      theme: {
        background: "#1f2126",
        foreground: "#d1dcef",
        // background: '#151729',
        // foreground: '#23b568',
        cursor: "#27ae60",
      },
      allowTransparency: true,
    });
    this.term.loadAddon(this.fitAddon);
    this.term.loadAddon(this.webLinksAddon);
    this.term.onResize(this.onResize);
    this.term.onTitleChange(this.onTitleChange);
    // Connect
    this.ws = new WebSocket(this.connectUrl, [
      "0",
      this.textToHex(this.subToken),
      this.textToHex(this.userToken),
      this.textToHex(this.uniqueId),
    ]);
    this.ws.onclose = (e) => this.onSocketClosed(e);
    this.ws.onopen = (e) => {
      this.onResize();
    };
    this.ws.onmessage = (e) => {
      this.onMessage(e.data);
    };
    this.ws.onerror = (e) => this.onSocketClosed(e);
    // Load addon
    this.attachAddon = new AttachAddon(this.ws);
    this.term.loadAddon(this.attachAddon);
  }
  componentDidMount() {
    if (this.terminalRef.current) {
      this.term.open(this.terminalRef.current, false);
      this.term.focus();
    }

    this.term.element.style.padding = "10px";
    this.term.element.style.overflow = "hidden";

    window.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.handleKeyPress);
  }

  /**
   * Unload component
   */
  componentWillUnmount() {
    // ngắt kết nối socket
    if (this.ws) {
      this.ws.close();
    }
    //remove terminal
    if (this.dispose) {
      this.term.dispose();
    }
  }

  pastePassword = () => {
    if (this.ws && this.ws.readyState == this.ws.OPEN) {
      const require = { require_password: true };
      const blob = new Blob([JSON.stringify(require)], {
        type: "application/json",
      });
      this.ws.send(blob);
    }
  };

  onTitleChange(newTitle) {
    if (this.props.onTitleChange) this.props.onTitleChange(newTitle);
  }

  onMessage = (message) => {
    if (this.props.onMessage) this.props.onMessage(message);
  };

  onResize = () => {
    if (this.terminalRef.current) {
      const terminalContainer = this.terminalRef.current;
      const width = terminalContainer.parentElement.clientWidth;
      terminalContainer.style.width = width + "px";
    }
    this.fitAddon.fit();
    this.sendSize();
  };

  textToHex = (text) => {
    let hex = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i).toString(16);
      hex += charCode.length === 1 ? "0" + charCode : charCode;
    }
    return hex;
  };

  sendSize = () => {
    // if (this.terminalRef.current) {
    //   const terminalContainer = this.terminalRef.current;
    //   const width = terminalContainer.parentElement.clientWidth;
    //   const height = terminalContainer.parentElement.clientHeight;
    //   const cols = parseInt(
    //     (width - this.term._core.viewport.scrollBarWidth - 15) /
    //       this.term._core._renderService.dimensions.device.cell.width
    //   );
    //   const rows = parseInt(
    //     height / this.term._core._renderService.dimensions.device.cell.height -
    //       1
    //   );
    // }
    if (this.ws && this.ws.readyState == this.ws.OPEN) {
      const windowSize = { high: this.term.rows, width: this.term.cols };
      const blob = new Blob([JSON.stringify(windowSize)], {
        type: "application/json",
      });
      this.ws.send(blob);
    }
  };

  onSocketClosed = (e) => {
    this.setState({
      socketError: true,
    });
    if (e.code !== 1006) {
      this.term.writeln(`\x1b[1;31m${e.reason}\x1b[0m`);
    } else {
      console.log("e", e);
      this.term.writeln(`\x1b[1;31mLỗi kết nối Websocket\x1b[0m`);
    }
    //remove terminal
    if (this.dispose) {
      this.term.dispose();
    }
    if (this.props.onSocketClosed) this.props.onSocketClosed(e);
  };

  handleKeyPress = (e) => {
    // Bắt sự kiện khi người dùng nhấn phím
    if (e.ctrlKey && e.shiftKey && e.key === "V") {
      e.preventDefault();
      this.pastePassword();
    }
  };

  render() {
    return (
      <div id="PFTerminal" style={{ height: "80vh" }} ref={this.terminalRef} />
    );
  }
}

PFTerm.propTypes = {
  /**
   * Options to initialize the terminal with.
   */
  options: PropTypes.object,

  /** Xoá terminal khi ngắt kết nối */
  dispose: PropTypes.bool,
  /** UniqueId kết nối */
  uniqueId: PropTypes.string.isRequired,
  /** Token của user */
  userToken: PropTypes.string.isRequired,
  /** URL socket */
  connectUrl: PropTypes.string.isRequired,
  /** Subtoken socket */
  subToken: PropTypes.string.isRequired,
  /**
   * When terminal title change
   *
   * @param string newTitle
   */
  onTitleChange: PropTypes.func,
  /**
   * Recieved data from terminal
   *
   * @param string text
   */
  onMessage: PropTypes.func,
  /**
   * Closed connect to socket
   */
  onSocketClosed: PropTypes.func,
};

export default PFTerm;
