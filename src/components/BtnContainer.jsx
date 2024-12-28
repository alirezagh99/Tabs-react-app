import React from "react";
import Btn from "./Btn";
function BtnContainer({ jobs, setCurrItem, currItem }) {
  return (
    <div className="flex flex-row lg:flex-col">
      {jobs.map((item, index) => {
        return (
          <Btn
            key={item.id}
            data={item}
            index={index}
            setCurrItem={setCurrItem}
            currItem={currItem}
          />
        );
      })}
    </div>
  );
}

export default BtnContainer;
