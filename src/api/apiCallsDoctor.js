export const signUpDoctor = async (user) => {
  return await fetch(`http://localhost:8000/doctor/signup`, {
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

export const signInDoctor = async (user) => {
  return await fetch(`http://localhost:8000/doctor/signin`, {
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

export const getPatient = async (id) => {
  return await fetch(`http://localhost:8000/patient/getPatientInfo`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const bookmyAppointment = async (user) => {
  return await fetch(`http://localhost:8000/patient/bookAppointment`, {
    method: "PUT",
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

export const removeMyAppointment = async (user) => {
  return await fetch(`http://localhost:8000/doctor/removeAppointment`, {
    method: "PUT",
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
export const doctorDetail = async (id) => {
  return await fetch(`http://localhost:8000/doctor/getDoctorDetail`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
