import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import DoctorSignIn from "../view/doctorSignIn";
import DoctorSignUp from "../view/doctorSignUp";
import ErrorPage from "../view/error";
import PatientSignUp from "../view/patientSignUp";
import PatientDashboard from "../view/patientDashboard";
import DoctorDashboard from "../view/doctorDashboard";
import AppointmentSlot from "../component/patientComponent/appointmentSlot"
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/DoctorSignIn" exact element={<DoctorSignIn />} />
        <Route path="/DoctorSignUp" exact element={<DoctorSignUp />} />
        <Route path="/PatientSignUp" exact element={<PatientSignUp />} />
        <Route path="/PatientDashboard" exact element={<PatientDashboard />} />
        <Route path="/DoctorDashboard" exact element={<DoctorDashboard />} />
        <Route path="/AppointmentSlot" exact element={<AppointmentSlot />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
