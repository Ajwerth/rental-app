import React from "react";
import { useFetch } from "../customHooks"
import "bootstrap/dist/css/bootstrap.min.css";
import Row from './Row';

const sectionStyle = {
  margin: 20
}

const Cars = () => {
  
  const res = useFetch("http://localhost:5000/api/cars", {});
  if (!res.response) {
    return <div>Loading...</div>
  }

  const cars = res.response.cars

  return (
    <section style={sectionStyle}>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
        <tbody>
            <Row data={cars} />
        </tbody>
    </section>
  );
}

export default Cars;