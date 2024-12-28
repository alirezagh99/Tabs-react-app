import React from "react";

function Btn({ data, setCurrItem, index, currItem }) {
  const { company } = data;
  return (
    <button
      onClick={() => setCurrItem(index)}
      className={`text-[13px] font-medium mb-5 px-10 ${
        index == currItem
          ? "lg:border-l-2 border-b-2 lg:border-b-0 pb-3 lg:pb-0 border-green-400 text-green-400"
          : ""
      }`}
    >
      {company}
    </button>
  );
}

export default Btn;
