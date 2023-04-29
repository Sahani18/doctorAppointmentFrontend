export const signInpatient = async (user) => {
  return await fetch(`http://localhost:8000/patient/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};



export const signUpPatient = async (user) => {
  return await fetch(`http://localhost:8000/patient/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllDoctors = async () => {
  return await fetch(`http://localhost:8000/patient/getAllDoctors`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getDoctor = async (id) => {
  return await fetch(`http://localhost:8000/doctor/getDoctorDetail`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPatientBookings = async (id) => {
  return await fetch(`http://localhost:8000/patient/getPatientAppointment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
};
