import React from "react";

function Btn({ data }) {
  const { company } = data;
  return (
    <button className="text-[13px] font-medium mb-5 px-10 border-l-2 border-green-400 text-green-400">
      {company}
    </button>
  );
}

export default Btn;
