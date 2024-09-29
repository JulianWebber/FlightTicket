export const fetchFlights = async (searchParams) => {
    // Mock API call
    return [
      {
        airline: 'Airline A',
        flightNumber: 'AA123',
        departureTime: '10:00 AM',
        arrivalTime: '12:00 PM',
        duration: '2h',
        stops: 0,
        price: 200
      },
      {
        airline: 'Airline B',
        flightNumber: 'BB456',
        departureTime: '1:00 PM',
        arrivalTime: '3:00 PM',
        duration: '2h',
        stops: 1,
        price: 150
      }
    ];
  };