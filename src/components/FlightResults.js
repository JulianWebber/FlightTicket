import React from 'react';
import FlightCard from './FlightCard';

const FlightResults = ({ flights }) => {
  return (
    <div>
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;