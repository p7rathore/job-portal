import React from "react";

const Loading = () => {
  return (
    <div className="loading-spinner flex flex-col items-center justify-center h-screen">
      <div className="spinner border-4 border-solid border-opacity-10 border-black border-left-4 rounded-full w-12 h-12 animate-spin mb-5"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;