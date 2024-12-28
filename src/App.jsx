import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";
import React, { useEffect, useState } from "react";
const url = "https://www.course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currItem, setCurrItem] = useState(0);

  const myFetch = async () => {
    setIsloading(true);
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsloading(false);
  };
  useEffect(() => {
    myFetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <p className="font-semibold text-4xl my-10 ml-[45%] text-gray-800">
          Loading...
        </p>
      ) : (
        <div className="w-2/3 m-auto mt-10 flex flex-col lg:flex-row p-3 gap-5">
          <BtnContainer
            jobs={jobs}
            setCurrItem={setCurrItem}
            currItem={currItem}
          />
          <JobInfo jobs={jobs} currItem={currItem} />
        </div>
      )}
    </>
  );
}

export default App;
