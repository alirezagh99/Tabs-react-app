import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";
import React, { useEffect, useState } from "react";
const url = "https://www.course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsloading] = useState(true);
  const [jobs, setJobs] = useState([]);

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
        <p className="font-semibold text-2xl m-10">Loading...</p>
      ) : (
        <div className="w-2/3 m-auto mt-10 flex flex-col lg:flex-row p-3 gap-5">
          <BtnContainer jobs={jobs} />
          <JobInfo />
        </div>
      )}
    </>
  );
}

export default App;
