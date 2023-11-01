import React from "react";

import { Typography } from "antd";

const ModalCard = ({ nameCard, body }) => {
  return (
    <div className="gateway__status w-full system__in4_container bg-white mt-4  shadow-lg rounded-[6px]  overflow-hidden">
      <Typography className="p-[8px] w-full bg-[black] text-white">
        {nameCard}
      </Typography>
      <div className="p-[8px] flex flex-col gap-2">{body}</div>
    </div>
  );
};

export default ModalCard;
