import React, { useState, useEffect } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
const UploadCustom = () => {
     const [file, setFile] = useState();

     console.log("file", file);
     return (
          <div className="upload-container shadow-md">
               <input
                    onChange={(e) => {
                         const imgArea = document.querySelector(".upload-img-area");
                         const image = e.target.files[0];
                         const reader = new FileReader();
                         reader.onload = () => {
                              const imgUrl = reader.result;
                              const img = document.createElement("img");
                              img.src = imgUrl;
                              imgArea.appendChild(img);
                              imgArea.classList.add("active");
                              imgArea.dataset.img = image.name;
                         };
                         if (image) {
                              reader.readAsDataURL(image);
                              setFile(image);
                         }
                    }}
                    type="file"
                    id="file"
                    accept="image/*"
                    hidden
               />
               <div className="upload-img-area" data-img="">
                    <CloudUploadOutlined className="upload-icon" />
                    <h3>Upload Image</h3>
                    <p>
                         Image size must be less than <span>2MB</span>
                    </p>
                    {/* <img src="/assets/img/bg/1.png" alt="img ne" /> */}
               </div>
               <button
                    className="upload-select-image"
                    onClick={() => {
                         const inputFile = document.querySelector("#file");
                         inputFile.click();
                    }}
               >
                    Select Image
               </button>
          </div>
     );
};

export default UploadCustom;
