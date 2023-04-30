import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlueButton from "../component/common/blueButton";
import YellowButton from "../component/common/yellowButton";
import {
  getPatient,
  removeMyAppointment,
  doctorDetail,
} from "../api/apiCallsDoctor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DoctorDashboard() {
  const location = useLocation();

  var docAppointment = location.state.doctor.appointment;
  const docId = location.state.doctor._id;

  const [appointmentBook, setAppointmentBook] = useState({
    id: docId,
    appointment: "0",
    index: "",
  });
  const [myDoctor, setMyDoctor] = useState();
  const [patient, setPatient] = useState({
    fullname: "",
    contact: "",
    age: "",
  });

  const { id, appointment, index } = appointmentBook;

  //get doctor's detail
  const getDetail = () => {
    console.log(docId);
    doctorDetail({ docId })
      .then((data) => {
        if (data.error) {
          return toast("Couldn't find doctor");
        } else {
          setMyDoctor(data);
          console.log(myDoctor);
        }
      })
      .catch(() => toast("Error Occurred"));
  };

  //Get index of appointment slot
  const getIndex = (index) => {
    setAppointmentBook({ ...appointmentBook, index: index });
    console.log(appointmentBook);
  };

  // delete appointment
  const getIndexAndDelete = (event) => {
    event.preventDefault();
    console.log("Deleting....");
    removeMyAppointment({ id, appointment, index })
      .then((data) => {
        if (data.error) {
          return toast("Couldn't Delete Appointment");
        } else toast("Deleted Sucessfully");
      })
      .catch(() => toast("Error Occurred"));
  };
  useEffect(() => {
    getDetail();
  }, []);

  const handleClick = (id) => {
    getPatient({ id })
      .then((data) => {
        if (data.error) {
          toast(data.error);
        } else {
          setPatient(data);
        

          alert(
            `Patient is ${data.fullname} his contact is ${data.contact} & age is ${data.age}`
          );
       
        }
      })
      .catch((err) => console.log("Error"));
  };

  return (
    <div className="h-screen bg-sky-900  text-white text-6xl">
      <div className="flex pl-5 pt-4 pb-5 ">
        <img
          className="w-20 h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          alt="Bordered avatar"
        />
        <div className="justify-between  w-screen flex mr-10 font-bold">
          <div className="pl-10">
            <p className="text-white uppercase  text-3xl pl-3 pt-2">
              {location.state.doctor.fullname}
            </p>
            <p className="text-white uppercase text-xl pl-3  pt-2">
              {location.state.doctor.specialization}
            </p>
          </div>
          <Link to="/">
            {" "}
            <p className=" text-sm hover:text-yellow-300 ">Log Out</p>
          </Link>
        </div>
      </div>

      <div className="text-white text-4xl text-center pb-12">
        Booked Appointments
      </div>

      <div className="grid gap-8 grid-cols-5 ">
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            getIndex("0");
            handleClick(docAppointment[0]);
          }}
        >
          {docAppointment[0] == "0" ? (
            <BlueButton slot={26} />
          ) : (
            <YellowButton slot={26} />
          )}
        </div>

        <div
          className="hover:cursor-pointer"
          onClick={() => {
            getIndex("1");
            handleClick(docAppointment[1]);
          }}
        >
          {docAppointment[1] == "0" ? (
            <BlueButton slot={27} />
          ) : (
            <YellowButton slot={27} />
          )}
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            getIndex("2");
            handleClick(docAppointment[2]);
          }}
        >
          {docAppointment[2] == "0" ? (
            <BlueButton slot={28} />
          ) : (
            <YellowButton slot={28} />
          )}
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            getIndex("3");
            handleClick(docAppointment[3]);
          }}
        >
          {docAppointment[3] == "0" ? (
            <BlueButton slot={29} />
          ) : (
            <YellowButton slot={29} />
          )}
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            getIndex("4");
            handleClick(docAppointment[4]);
          }}
        >
          {docAppointment[4] == "0" ? (
            <BlueButton slot={30} />
          ) : (
            <YellowButton slot={30} />
          )}
        </div>
      </div>
      <br />
      <br />
      <div
        onClick={getIndexAndDelete}
        className="h-12 w-52 hover:cursor-pointer hover:text-black hover:bg-slate-50 rounded-md pt-2 text-center  bg-slate-700 text-xl  text-orange-400 mx-auto"
      >
        Delete Appointment
      </div>
      <ToastContainer />
    </div>
  );
}

export default DoctorDashboard;
