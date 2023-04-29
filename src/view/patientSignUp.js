import React, { useState } from "react";
import Navbar from "../component/common/navbar";
import { signUpPatient } from "../api/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PatientSignUp() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    contact: "",
    error: "",
    success: false,
  });
  const { fullname, email, password, age, contact, error, success } = value;

  const handleChange = (fullname) => (event) => {
    setValue({ ...value, error: false, [fullname]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue({ ...value, error: false });
    signUpPatient({ fullname, email, password, age, contact })
      .then((data) => {
        if (data.error) {
          setValue({ ...value, error: data.error, success: false });
          toast("Registration Failed");

        } else {
          toast("Registration Successful");
          setValue({
            ...value,
            fullname: "",
            email: "",
            password: "",
            age: "",
            contact: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in SignUp"));
  };

  return (
    <div className="bg-sky-900 h-[120vh] -mt-6">
      <Navbar />

      <div className="md:grid -mt-16 md:grid-cols-3 md:gap-6 ">
        <div className="mt-5 md:col-span-2 md:mt-0 mx-auto ">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      value={fullname}
                      onChange={handleChange("fullname")}
                      id="full-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full p-2 rounded-md border-sky-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 pl-32">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="Number"
                      name="last-name"
                      value={age}
                      onChange={handleChange("age")}
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      value={email}
                      onChange={handleChange("email")}
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      value={password}
                      onChange={handleChange("password")}
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact No
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      value={contact}
                      onChange={handleChange("contact")}
                      id="postal-code"
                      autoComplete="postal-code"
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  onClick={onSubmit}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Register Patient
                </button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
     {/*  <p className="text-white text-center">{JSON.stringify(value)}</p> */}

      <br />
      <br />
    </div>
  );
}
