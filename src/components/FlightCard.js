import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const FlightCard = ({ flight }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{flight.airline} {flight.flightNumber}</Typography>
        <Typography>Departure: {flight.departureTime}</Typography>
        <Typography>Arrival: {flight.arrivalTime}</Typography>
        <Typography>Duration: {flight.duration}</Typography>
        <Typography>Stops: {flight.stops}</Typography>
        <Typography>Price: ${flight.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;