import React, { useState } from "react";
import { Button, Modal, Upload } from "antd";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import UploadCustom from "./UploadCustom";
import Input from "../Custom/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
import TextField from "@mui/material/TextField";
const getBase64 = (file) =>
     new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
     });

const ModalUpload = ({ isShow, setIsShow }) => {
     const [type, setType] = useState();
     const [fileList, setFileList] = useState([]);

     const handleChange = (event) => {
          setType(event.target.value);
     };
     const handlePreview = async (file) => {
          if (!file.url && !file.preview) {
               file.preview = await getBase64(file.originFileObj);
          }
          setPreviewImage(file.url || file.preview);
          setPreviewOpen(true);
          setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
     };
     const uploadButton = (
          <div>
               <PlusOutlined />
               <div
                    style={{
                         marginTop: 8,
                    }}
               >
                    Upload
               </div>
          </div>
     );
     console.log("listFile", fileList);
     return (
          <Modal
               closable={false}
               className="modal-upload"
               open={isShow}
               onCancel={() => {
                    setIsShow(false);
               }}
               centered
               footer={
                    <div>
                         <Button className="btn-cancel">Cancel</Button>
                         <Button className="btn-save">Save</Button>
                    </div>
               }
          >
               <div className="flex flex-col gap-4 items-center justify-center">
                    <UploadCustom />
                    {/* <Input /> */}
                    <div className="flex flex-col gap-3 justify-start w-full">
                         <Box sx={{ minWidth: 120 }}>
                              <FormControl sx={{ minWidth: 120 }} size="small">
                                   <InputLabel id="demo-select-small-label">Type</InputLabel>
                                   <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={type}
                                        label="Age"
                                        onChange={handleChange}
                                   >
                                        <MenuItem value="places">Places</MenuItem>
                                        <MenuItem value="hotel">Hotel</MenuItem>
                                        <MenuItem value="restaurant">Restaurant</MenuItem>
                                   </Select>
                                   <FormHelperText>
                                        <p className="text-[10px]">Places, Hotel or Restaurant</p>
                                   </FormHelperText>
                              </FormControl>
                         </Box>
                         <TextField label="Địa chỉ" id="outlined-size-small" size="small" />
                         <div className="flex gap-2">
                              <FormControl sx={{ minWidth: 120 }} size="small">
                                   <InputLabel id="demo-select-small-label">Tỉnh</InputLabel>
                                   <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={type}
                                        label="Age"
                                        onChange={handleChange}
                                   >
                                        <MenuItem value="places">Places</MenuItem>
                                        <MenuItem value="hotel">Hotel</MenuItem>
                                        <MenuItem value="restaurant">Restaurant</MenuItem>
                                   </Select>
                              </FormControl>

                              <FormControl sx={{ minWidth: 120 }} size="small">
                                   <InputLabel id="demo-select-small-label">Huyện</InputLabel>
                                   <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={type}
                                        label="Age"
                                        onChange={handleChange}
                                   >
                                        <MenuItem value="places">Places</MenuItem>
                                        <MenuItem value="hotel">Hotel</MenuItem>
                                        <MenuItem value="restaurant">Restaurant</MenuItem>
                                   </Select>
                              </FormControl>

                              <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
                                   <InputLabel id="demo-select-small-label">Thị xã</InputLabel>
                                   <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={type}
                                        label="Age"
                                        onChange={handleChange}
                                   >
                                        <MenuItem value="places">Places</MenuItem>
                                        <MenuItem value="hotel">Hotel</MenuItem>
                                        <MenuItem value="restaurant">Restaurant</MenuItem>
                                   </Select>
                              </FormControl>
                         </div>
                    </div>
               </div>
          </Modal>
     );
};

export default ModalUpload;
