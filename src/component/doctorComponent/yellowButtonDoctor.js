import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function YellowButtonDoctor({ slot }) {
  return (
    <div className="h-8 w-8 mt-3 mx-auto hover:text-gray-800 hover:cursor-pointer hover:bg-yellow-600 bg-yellow-400 rounded-md text-center pt-1 text-gray-200 font-bold">
      {slot}
      <ToastContainer />
    </div>
  );
}

export default YellowButtonDoctor;
