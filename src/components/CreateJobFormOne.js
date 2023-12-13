import React, { useEffect, useState } from "react";
import Button from "./Button";

function CreateJobFormOne({ handleSubmit, selectedJobData }) {

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [remoteType, setRemoteType] = useState("");

  useEffect(() => {
    if (selectedJobData) {
      const { jobTitle, companyName, industry, location, remoteType } = selectedJobData
      setJobTitle(jobTitle);
      setCompanyName(companyName);
      setIndustry(industry);
      setLocation(location);
      setRemoteType(remoteType);
    }
  }, [])

  const checkValidation = () => {
    let isError = false;
    if (!jobTitle) {
      alert('Please enter Job Title');
      isError = true;
    } else if (!companyName) {
      alert('Please enter Company Name');
      isError = true;
    } else if (!industry) {
      alert('Please enter the Industry');
      isError = true;
    }
    return isError;
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const hasError = checkValidation();
    if (hasError) {
      return;
    }
    const data = { jobTitle: jobTitle, companyName: companyName, industry: industry, location: location, remoteType: remoteType }
    handleSubmit(data);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="flx-btwn">
          <p className="font-normal text-2xl">Create a job</p>
          <p className="font-medium font-sans text-base">Step 1</p>
        </div>
        <div className="form-inp-div">
          <p className="font-medium">
            Job title<span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="inp"
            placeholder="ex. UX UI Designer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="form-inp-div">
          <p className="font-medium">
            Company name<span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="inp"
            placeholder="ex. Google"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="form-inp-div">
          <p className="font-medium">
            Industry<span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="inp"
            placeholder="ex. Information Technology"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>

        <div className="flex justify-between gap-7">
          <div className="w-1/2 form-inp-div">
            <p className="font-medium">Location</p>
            <input
              type="text"
              className="inp"
              placeholder="ex. Chennai"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="w-1/2 form-inp-div">
            <p className="font-medium">Remote type</p>
            <input
              type="text"
              className="inp"
              placeholder="ex. In-office"
              value={remoteType}
              onChange={(e) => setRemoteType(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end mt-20">
          <Button btnName='Next' isPrimary />
        </div>
      </form>
    </>
  );
}

export default CreateJobFormOne;
