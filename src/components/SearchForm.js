import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { Autocomplete } from '@mui/lab';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('economy');
  const [tripType, setTripType] = useState('one-way');

  const handleSearch = () => {
    onSearch({ origin, destination, departureDate, returnDate, passengers, flightClass, tripType });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form>
        <Autocomplete
          options={[]}
          value={origin}
          onChange={(e, newValue) => setOrigin(newValue)}
          renderInput={(params) => <TextField {...params} label="Origin" />}
        />
        <Autocomplete
          options={[]}
          value={destination}
          onChange={(e, newValue) => setDestination(newValue)}
          renderInput={(params) => <TextField {...params} label="Destination" />}
        />
        <DatePicker
          label="Departure Date"
          value={departureDate}
          onChange={setDepartureDate}
          renderInput={(params) => <TextField {...params} />}
        />
        {tripType === 'round-trip' && (
          <DatePicker
            label="Return Date"
            value={returnDate}
            onChange={setReturnDate}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
        <TextField
          label="Passengers"
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
        <TextField
          select
          label="Class"
          value={flightClass}
          onChange={(e) => setFlightClass(e.target.value)}
        >
          <MenuItem value="economy">Economy</MenuItem>
          <MenuItem value="premium-economy">Premium Economy</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="first">First</MenuItem>
        </TextField>
        <TextField
          select
          label="Trip Type"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <MenuItem value="one-way">One-way</MenuItem>
          <MenuItem value="round-trip">Round-trip</MenuItem>
          <MenuItem value="multi-city">Multi-city</MenuItem>
        </TextField>
        <Button onClick={handleSearch}>Search</Button>
      </form>
    </LocalizationProvider>
  );
};

export default SearchForm;