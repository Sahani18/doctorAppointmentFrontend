import React from "react";

function YellowButton({ slot }) {
  return (
    <div className="h-20 w-20 mt-3 mx-auto hover:text-gray-800 hover:bg-yellow-600 bg-yellow-400 rounded-md text-center pt-1 text-gray-200 font-bold">
      {slot}
    </div>
  );
}

export default YellowButton;
