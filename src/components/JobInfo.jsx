import React from "react";
import DutyItem from "./DutyItem";
import { v4 as uuidv4 } from "uuid";
function JobInfo({ jobs, currItem }) {
  const { company, title, duties, dates } = jobs[currItem];
  return (
    <div>
      <h2 className="text-3xl text-[rgba(0,0,0,0.8)] mb-2">{title}</h2>
      <span className="text-[12px] text-[rgba(0,0,0,0.8)] font-semibold px-2 bg-gray-300">
        {company}
      </span>
      <h5 className="text-[13px] mt-2 text-gray-500">{dates}</h5>
      <div className="mt-4">
        {duties.map((item) => {
          return <DutyItem key={uuidv4()} duty={item} />;
        })}
      </div>
    </div>
  );
}

export default JobInfo;
