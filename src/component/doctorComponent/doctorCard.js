import React, { useState } from "react";
import { bookmyAppointment } from "../../api/apiCallsDoctor";
import BlueButtonDoctor from "./blueButtonDoctor";
import YellowButtonDoctor from "./yellowButtonDoctor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorCard = ({ doctor, patient }) => {
  const docId = doctor._id;
  const patId = patient._id;
  const [appointmentBook, setAppointmentBook] = useState({
    id: docId,
    appointment: patId,
    index: "",
  });

  const { id, appointment, index } = appointmentBook;
  const onSubmit = (event) => {
    event.preventDefault();  

    bookmyAppointment({ id, appointment, index })
      .then((data) => {
        if (data.error) {
          return toast("Appointment Booking Failed");
        } else {
           toast("Booked Sucessfully");
           return setTimeout(()=>{
            window.location.reload();
           },1500) 
        }
      })
      .catch(() => toast("Error in Booking"));
  };

  const handleClick = (index) => {
   
    setAppointmentBook({ ...appointmentBook, index: index });
  };

  return (
    <div className=" h-[332px] w-56 bg-purple-600 rounded-lg p-2 shadow-lg">
      <div class="text-center ">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          class="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">
          {doctor.fullname}
        </h5>
        <p class="text-gray-300">{doctor.specialization}</p>
        <div className="flex justify-evenly">
          {doctor.appointment[0] == "0" ? (
            <div onClick={() => handleClick("0")}>
              <BlueButtonDoctor slot={26} />
            </div>
          ) : (
            <div onClick={() => handleClick("0")}>
              {" "}
              <YellowButtonDoctor slot={26} />
            </div>
          )}
          {doctor.appointment[1] == "0" ? (
            <div onClick={() => handleClick("1")}>
              {" "}
              <BlueButtonDoctor slot={27} />
            </div>
          ) : (
            <div onClick={() => handleClick("1")}>
              {" "}
              <YellowButtonDoctor slot={27} />
            </div>
          )}
          {doctor.appointment[2] == "0" ? (
            <div onClick={() => handleClick("2")}>
              {" "}
              <BlueButtonDoctor slot={28} />
            </div>
          ) : (
            <div onClick={() => handleClick("2")}>
              {" "}
              <YellowButtonDoctor slot={28} />
            </div>
          )}
          {doctor.appointment[3] == "0" ? (
            <div onClick={() => handleClick("3")}>
              {" "}
              <BlueButtonDoctor slot={29} />
            </div>
          ) : (
            <div onClick={() => handleClick("3")}>
              {" "}
              <YellowButtonDoctor slot={29} />
            </div>
          )}
          {doctor.appointment[4] == "0" ? (
            <div onClick={() => handleClick("4")}>
              {" "}
              <BlueButtonDoctor slot={30} />
            </div>
          ) : (
            <div onClick={() => handleClick("4")}>
              {" "}
              <YellowButtonDoctor slot={30} />
            </div>
          )}
        </div>
        <button
          onClick={onSubmit}
          type="button"
          class="inline-block px-6 py-2.5 bg-gray-400 text-purple-900 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:text-white hover:bg-gray-700 hover:shadow-lg  focus:shadow-lg mt-5 focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
        >
          Book Appointment
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DoctorCard;
