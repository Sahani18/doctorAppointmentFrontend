import React, { useState } from "react";
import Navbar from "../component/common/navbar";
import { useNavigate } from "react-router-dom";
import { signInDoctor } from "../api/apiCallsDoctor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DoctorSignIn() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const navigate = useNavigate();

  const { email, password, error, loading, didRedirect } = value;

  const handleChange = (email) => (event) => {
    setValue({ ...value, error: false, [email]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue({ ...value, error: false, loading: true });
    toast("Authenticating User");
    signInDoctor({ email, password })
      .then((data) => {
        if (data.error) {
          setValue({ ...value, error: data.error, loading: false });
          toast(data.error);
        } else {
          setValue({ ...value, didRedirect: true });

          toast("Authenticated");

          navigate("/DoctorDashboard", { state: data });
        }
      })
      .catch(() => {
        toast("Error in Sign In");
      });
  };

  return (
    <div className="bg-sky-900 h-screen">
      <Navbar />

      <div className="flex min-h-full items-center justify-center -mt-40  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-300">
              Sign in to see Dashboard
            </h2>
          </div>
         {/*  <div className="bg-gray-100 backdrop:blur-sm p-10 rounded-md"> */}

         
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  value={email}
                  onChange={handleChange("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <br />
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={handleChange("password")}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Doctor Sign in
              </button>
            {/*   <p className="text-white text-center">{JSON.stringify(value)}</p> */}
              {/*  <p className="text-white text-center">{JSON.stringify(doctor)}</p> */}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>
            </div>
          </form>
      {/*     </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
