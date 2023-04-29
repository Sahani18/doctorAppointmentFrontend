import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function BlueButtonDoctor({ slot }) {
  return (
    <div className="h-8 w-8 mt-3 mx-auto  hover:cursor-pointer hover:text-gray-800 hover:bg-purple-500 bg-purple-900 rounded-md text-center pt-1 text-gray-200 font-bold">
      {slot}
      <ToastContainer />
    </div>
  );
}

export default BlueButtonDoctor;
