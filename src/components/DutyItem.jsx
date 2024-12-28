import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
function DutyItem({ duty }) {
  return (
    <div className="mb-3 text-[rgba(0,0,0,0.7)] flex flex-row justify-between gap-5 items-center">
      <div className="text-green-400">
        <FaAngleDoubleRight />
      </div>
      <p className="text-sm font-semibold">{duty}</p>
    </div>
  );
}

export default DutyItem;
