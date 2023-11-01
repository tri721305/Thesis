import React from "react";

const InfoCar = ({ title, info, props }) => {
  return (
    <div className="flex items-start in4_row">
      <div className="w-[10%] font-medium text-[14px]">{`${title}:`}</div>
      <div className="flex-1">{info}</div>
    </div>
  );
};

export default InfoCar;
