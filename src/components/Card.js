import React from "react";
import companylogo from "../assets/Images/Rectangle 1965.png";
import editIcon from '../assets/Icons/editing.png';
import deleteIcon from '../assets/Icons/delete.png';
import Button from "./Button";

const Card = ({ data, getSelectedJob, handleDelete }) => {
  return (
    <>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-5 mb-1.5">
          {data.length ? data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">

              <div className="flex p-4">
                <img className="w-12 h-12 mr-4" src={companylogo} alt="icon.png" />
                <div className="">
                  <div>
                    <p className="text-lg font-semibold">{item.jobTitle}</p>
                    <p className="">{`${item.companyName} - ${item.industry}`}</p>
                    <p className="text-gray-500">{`${item.location} (${item.remoteType})`}</p>
                  </div>
                  <div className="my-4 grid grid-cols-1 gap-2">
                    <p className="">Part-Time (9.00 am - 5.00 pm IST)</p>
                    <p className="">Experience ({`${item.experienceMin} - ${item.experienceMax} years`})</p>
                    <p className="">INR (₹) {`${item.salaryMin} - ${item.salaryMax} / Month`}</p>
                    <p className="">{item.totalEmployees} employees</p>
                  </div>
                  <Button btnName={item.applyType === "quickApply" ? "Apply Now" : "External Apply"} isPrimary={item.applyType === "quickApply"} />
                </div>
                <div className="flex ml-32">
                  <img className="w-6 h-6 mr-4 cursor-pointer" src={editIcon} alt="icon.png" onClick={() => getSelectedJob(item)} />
                  <img className="w-6 h-6 mr-4 cursor-pointer" src={deleteIcon} alt="icon.png" onClick={() => handleDelete(item.id)} />
                </div>
              </div>

            </div>
          )) : <div className="w-screen flex justify-center items-center">
            Job is not available, Please create a Job!
          </div>}
        </div>
      </div>
    </>
  );
};

export default Card;
