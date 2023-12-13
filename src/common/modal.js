import React from "react";

const Modal = ({ children, closeModal }) => {

  const handleModalClose = (e) => {
    if (e.target.id === "main-div") {
      closeModal();
    }
  }
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" id="main-div" onClick={handleModalClose}>
        <div className="w-2/4 bg-white rounded-md flex items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

{/* <button className="absolute top-2 right-2 bg-transparent border-none text-lg cursor-pointer" onClick={closeModal}>
    &times;
  </button> */}