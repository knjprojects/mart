import React from "react";

const Posting = ({ title, subtitle }) => {
  return (
    <div className="mb-10  mx-auto space-y-2 mt-4">
      <h1 className=" text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className=" text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Posting;
