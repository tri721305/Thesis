import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
const Header = () => {
     const classes = useStyles();
     return (
          <AppBar position="static">
               <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                         Thesis
                    </Typography>
                    <Box display="flex">
                         <Typography variant="h6" className={classes.title}>
                              Explore new places
                         </Typography>
                         {/* <Autocomplete> */}
                         <div className={classes.search}>
                              <div className={classes.searchIcon}>
                                   <SearchIcon />
                              </div>
                              <InputBase classes={{ root: classes.inputRoot, input: classes.inputInput }} placeholder="Search ... " />
                         </div>
                         {/* </Autocomplete> */}
                    </Box>
               </Toolbar>
          </AppBar>
     );
};

export default Header;
