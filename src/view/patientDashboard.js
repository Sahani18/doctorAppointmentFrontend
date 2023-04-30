import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppointmentSlot from "../component/patientComponent/appointmentSlot";
import { getAllDoctors } from "../api/apiCalls";
import { doctorDetail } from "../api/apiCallsDoctor";
import DoctorCard from "../component/doctorComponent/doctorCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const location = useLocation();

  var slots = location.state.bookingDate;

  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState([
    {
      name: "",
      slot: "",
      email: "",
    },
  ]);

  const noBooking = () => {
    return (
      <div className="h-[100px] w-[700px] mx-auto justify-center items-center content-center bg-slate-300 rounded-md shadow-md text-center text-3xl text-black">
        <div>
          <p className="mt-3">No Booking Found</p>
        </div>
      </div>
    );
  };
  const showBooking = () => {
    console.log("showing the booking",value);
   /*  return value.forEach((v) => {
      console.log("show ",v);
      return <AppointmentSlot />;
    }); */
  };

  //get patient booking details
  const getMyBookings = () => {
    slots.forEach((n) => {
      doctorDetail({ docId: n.id })
        .then((data) => {
          if (data.error) {
            return console.log("ERROR OCCURRED");
          }
          console.log("DATA", data);
          setValue(
            ...value,
            value.push({
              name: data.fullname,
              slot: n.index,
              email: data.email,
            })
          );
          console.log("VALUE", value);
        })
        .catch((err) => console.log(err));
    });
  };

  const loadAllDoctors = () => {
    getAllDoctors()
      .then((data) => {
        if (data.error) {
          toast(data.error);
        }
        setDoctors(data);
        getMyBookings();
        return;
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    loadAllDoctors();
  }, []);

  return (
    <div className="bg-sky-900 ">
      <div className="h-24 flex p-2 justify-start ">
        <img
          className="w-20 h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          alt="Bordered avatar"
        />
        <div className="pl-10 w-screen">
          <p className="text-2xl text-gray-200 uppercase">
            {location.state.fullname}
          </p>
          <p className="text-lg text-gray-200">{location.state.email}</p>
          <p className="text-md text-gray-200">{location.state.age}</p>
        </div>
        <Link to="/">
          {" "}
          <p className="pr-8 text-lg hover:animate-pulse hover:text-orange-500 text-gray-200">
            LOGOUT
          </p>
        </Link>
      </div>
      <p onClick={showBooking} className="text-center text-4xl text-white mb-3">My Appointment</p>
      <div className="grid gap-10 grid-cols-4 grid-rows-4 auto-cols-auto p-3 mx-auto content-center justify-evenly">
       {/*  {value.length < 2 ?  : noBooking()} */}
        {noBooking()}
      </div>

      <p className="text-center text-4xl text-white mb-3">Book Appointment</p>
      {
        <div className=" grid gap-12 grid-cols-4 grid-rows-4 auto-cols-auto p-4 justify-between">
          {doctors.map((doctor, index) => {
            return (
              <DoctorCard
                patient={location.state}
                key={index}
                doctor={doctor}
              />
            );
          })}
        </div>
      }
      <ToastContainer />
    </div>
  );
};

export default PatientDashboard;
