import React from "react";

function AppointmentSlot({ name="NA", slot="NA", email="NA" }) {
 
  return (
    <div className="h-14 w-44 bg-yellow-400 rounded-lg ">
      <div className="flex">
        <div className="h-12 w-14 rounded-md text-gray-200 pt-2 bg-blue-600 m-1 text-center ">
          {slot}
        </div>
        <div>
          <p className="pl-2 pt-1 uppercase">{name}</p>
          <p className="pt-0 pl-2 text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSlot;
