import React from "react";

function BlueButton({ slot }) {
  return (
    <div className="h-20 w-20 mt-3 mx-auto hover:text-gray-800 hover:bg-purple-500 bg-purple-900 rounded-md text-center pt-1 text-gray-200 font-bold">
      {slot}
    </div>
  );
}

export default BlueButton;
