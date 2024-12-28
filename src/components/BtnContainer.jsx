import React from "react";
import Btn from "./Btn";
function BtnContainer({ jobs }) {
  return (
    <div className="flex flex-row lg:flex-col">
      {jobs.map((item) => {
        return <Btn key={item.id} data={item} />;
      })}
    </div>
  );
}

export default BtnContainer;
