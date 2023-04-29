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

  const patientID = location.state._id;
  const [doctorData, setDoctorData] = useState([]);
  const [names, setNames] = useState([]);
  var slots = location.state.bookingDate;
  const [count, setCount] = useState(0);

  const getItem = () => {
    doctorData.forEach((doc) => {
      return console.log(doc.data.fullname);
    });
  };

  //get patient booking details
  const getMyBookings = () => {
    slots
      .forEach((n) => {
        doctorDetail({ docId: n.id }).then((data) => {
          if (data.error) {
            return console.log("ERROR OCCURRED");
          } else {
            setDoctorData(
              ...doctorData,
              doctorData.push({
                data: data,
                index: n.index,
              })
            );
          }
          console.table(doctorData);
        });
      })
      .catch(() => console.log("catch error"));
  };

  /*   const getMyAppointment = () => {
    var length = doctors.length;
    for (var i = 0; i < length; i++) {
      if (doctors[i].appointment.includes(patientID)) {
        //  doctors[i].appointment.indexOf(patientID);
        displayMyAppointment.push(doctors[i]);
        //  console.log("FOUND in", i);
      } else {
        console.log("NOT FOUND IN", i);
      }
    }
    console.log(`Appointment found in : ${i}`, displayMyAppointment);
    findMyAppointment();
  };
 */
  /*   const findMyAppointment = () => {
    displayMyAppointment.forEach((doctor) => {
      doctor.appointment.forEach((data, index) => {
        if (data === patientID) {
        
          // navigate to a function that prints the detail in demo card
          console.log(`YOUR APPOINTMENT IS ON ${index} in DOCTOR:${doctor.fullname}`, data);
       
        } else {
          console.log("NO BOOKING");
        }
      });
    });
  }; */
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
      <p onClick={getItem} className="text-center text-4xl text-white mb-3">
        My Appointment
      </p>
      <div className="grid gap-10 grid-cols-4 grid-rows-4 auto-cols-auto p-5 justify-evenly">
        {/*    {doctorData.map((item, index) => {
          return <Demo key={index} data={item[0].data} />;
        })} */}
        <AppointmentSlot name={"Doc"} slot={"26"} email={"doc@doc.com"} />
        <AppointmentSlot
          name={"Tester"}
          slot={"28"}
          email={"Tester@Tester.com"}
        />
        <AppointmentSlot
          name={"Final Test"}
          slot={"29"}
          email={"final@final.com"}
        />
        <AppointmentSlot name={"New"} slot={"30"} email={"New@New.com"} />
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
