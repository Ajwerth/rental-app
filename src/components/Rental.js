import React from "react";
import { useForm, useFetch, usePost } from "../customHooks";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const formStyle = {
  maxWidth: 500,
  margin: 20
};

const CarOptions = () => {

  const res = useFetch("http://localhost:5000/api/cars", {});
  if (!res.response) {
    return <div>Loading...</div>
  }

  const data = res.response.cars

  const Options = data.map(item => {
    return <option key={item.id}>{item.make}{item.model}</option>
  });

  return Options;
}

const Rental = () => {

  const { values, handleChange, handleSubmit } = useForm(login);

  function login() {
    console.log(values)
    axios.post('http://localhost:5000/api/reservations', {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      pickUpDate: values.pickUpDate,
      dropOffDate: values.dropOffDate,
      car: values.car
    },
    {
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          className="form-control"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          className="form-control"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className="form-control"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pickUp">Pick Up Date:</label>
        <input
          id="pickUpDate"
          className="form-control"
          type="date"
          name="pickUpDate"
          onChange={handleChange}
          value={values.pickUpDate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dropOff">Drop Off Date:</label>
        <input
          id="dropOffDate"
          className="form-control"
          type="date"
          name="dropOffDate"
          onChange={handleChange}
          value={values.dropOffDate}
        />
      </div>
      <div className="form-group">
        <label>Car:</label>
        <select
          className="form-control"
          name="car"
          id="car"
          onChange={handleChange}
          value={values.car}
        >
          <option defaultValue="selected">Select Car</option>
          <CarOptions />
        </select>
      </div>
      <input className="btn btn-primary" type="submit" value="Submit" />
    </form>
  );
};

export default Rental;
