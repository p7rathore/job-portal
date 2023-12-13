import React, { useEffect, useState } from "react";
import Button from "./Button";
import RadioBtn from "./RadioBtn";

const CreateJobFormTwo = ({ handleSubmit, selectedJobData }) => {
  const [experienceMin, setExperienceMin] = useState("");
  const [experienceMax, setExperienceMax] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [totalEmp, setTotalEmp] = useState("");
  const [applyType, setApplyType] = useState("quickApply");

  useEffect(() => {
    if (selectedJobData) {
      const { experienceMin, experienceMax, salaryMin, salaryMax, totalEmployees, applyType } = selectedJobData
      setExperienceMin(experienceMin);
      setExperienceMax(experienceMax);
      setSalaryMin(salaryMin);
      setSalaryMax(salaryMax)
      setTotalEmp(totalEmployees);
      setApplyType(applyType);
    }
  }, [])

  const checkValidation = () => {
    let isError = false;
    if (experienceMin !== '' || experienceMax !== '') { //For manage 0, I have put this condition because 0 is consider as falsy value that's why i puted this
      if (experienceMin !== '') {
        if (experienceMax !== '') {
          if (!(experienceMin < experienceMax)) {
            isError = true;
            alert('Minimum Experience should be less then to Maximum Experience');
          }
        } else {
          isError = true;
          alert('Please enter Maximum Experience')
        }
      } else {
        isError = true;
        alert('Please enter Minimum Experience')
      }
    }
    if (salaryMin !== '' || salaryMax !== '') { //For manage 0, I have put this condition because 0 is consider as falsy value that's why i puted this 
      if (salaryMin !== '') {
        if (salaryMax !== '') {
          if (!(salaryMin < salaryMax)) {
            isError = true;
            alert('Minimum Salary should be less then to Maximum Salary');
          }
        } else {
          isError = true;
          alert('Please enter Maximum Salary')
        }
      } else {
        isError = true;
        alert('Please enter Minimum Salary ')
      }
    }
    return isError;
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const hasError = checkValidation();
    if (hasError) {
      return;
    }
    const data = { experienceMin: experienceMin, experienceMax: experienceMax, salaryMin: salaryMin, salaryMax: salaryMax, totalEmployees: totalEmp, applyType: applyType }
    handleSubmit(data);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="flx-btwn">
          <p className="font-normal text-2xl">Create a job</p>
          <p className="font-medium font-sans text-base">Step 2</p>
        </div>
        <div className="form-inp-div">
          <p className="font-medium">Experience</p>
          <div className="flx-btwn">
            <input
              type="number"
              className="w-72 inp"
              placeholder="Minimum"
              min={0}
              value={experienceMin}
              onChange={(e) => setExperienceMin(Number(e.target.value))}
            />
            <input
              type="number"
              className="w-72 inp"
              placeholder="Maximum"
              min={0}
              value={experienceMax}
              onChange={(e) => setExperienceMax(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="form-inp-div">
          <p className="font-medium">Salary</p>
          <div className="flx-btwn">
            <input
              type="number"
              className="w-72 inp"
              placeholder="Minimum"
              min={0}
              value={salaryMin}
              onChange={(e) => setSalaryMin(Number(e.target.value))}
            />
            <input
              type="number"
              className="w-72 inp"
              placeholder="Maximum"
              min={0}
              value={salaryMax}
              onChange={(e) => setSalaryMax(Number(e.target.value))}
            />
          </div>
        </div>


        <div className="form-inp-div">
          <p className="font-medium text-base">
            Total employee
          </p>
          <input
            type="number"
            className="inp"
            placeholder="ex. UX UI Designer"
            min={0}
            value={totalEmp}
            onChange={(e) => setTotalEmp(Number(e.target.value))}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <p className="font-medium">Apply type</p>
          <div className="flex gap-5">
            <RadioBtn btnName="Quick apply" id="quickApply" value='quickApply' checked={applyType === "quickApply"} handleChange={setApplyType} />
            <RadioBtn btnName="External apply" id="externalApply" value='externalApply' checked={applyType === "externalApply"} handleChange={setApplyType} />
          </div>
        </div>
        <div className="flex justify-end mt-20">
          <Button btnName="Save" isPrimary />
        </div>
      </form>
    </>
  );
};

export default CreateJobFormTwo;
