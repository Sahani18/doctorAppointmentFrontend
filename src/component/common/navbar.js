import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-gray-300 text-xl">DoKter </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-7 text-white -mt-5">Patient Sign In</Link>
            <Link to="/DoctorSignUp" className="mr-7 text-white -mt-5">Doctor SignUp</Link>
            <Link to="/PatientSignUp" className="mr-7 text-white -mt-5">Patient SignUp</Link>
            <Link to="/DoctorSignIn" className="mr-7 text-white -mt-5">Docter SignIn</Link>
           {/*  <Link to="/Demo" className="mr-7 text-white -mt-5">Demo</Link> */}
          {/*   <Link to="/PatientDashboard" className="mr-7 text-white -mt-5">Patient Dashboard</Link>
            <Link to="/DoctorDashboard" className="mr-7 text-white -mt-5">Doctor Dashboard</Link> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
