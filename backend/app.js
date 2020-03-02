import { Reservations, Cars } from './db/db';
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors');

app.use(bodyParser.json({ type: "application/json" }));
app.use(cors())
const PORT = 5000;

// Reservations
app.get('/api/reservations', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'reservations retrieved successfully',
    reservations: Reservations
  })
});

app.get('/api/reservations/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  Reservations.map((reservation) => {
    if (reservation.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'reservation retrieved successfully',
        reservation,
      });
    } 
    return res.status(404).send({
      success: 'false',
      message: 'reservation does not exist',
      });
  });
});

app.post('/api/reservations', (req, res) => {
    const reservation = {
      id: Reservations.length + 1,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      pick_up: req.body.pickUpDate,
      drop_off: req.body.dropOffDate,
      car: req.body.car
    }
    Reservations.push(reservation);
    return res.status(201).send({
        success: 'true',
        message: 'reservation added successfully',
        reservation: reservation.body
    })
});

// Cars
app.get('/api/cars', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'cars retrieved successfully',
      cars: Cars
    })
  });

app.get('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  Cars.map((car) => {
    if (car.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'car retrieved successfully',
        car,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'car does not exist',
      });
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

module.exports = app