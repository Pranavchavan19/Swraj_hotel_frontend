// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js
// import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';

// const RoomDetailsPage = () => {
//   const navigate = useNavigate(); // Access the navigate function to navigate
//   const { roomId } = useParams(); // Get room ID from URL parameters
//   const [roomDetails, setRoomDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); // Track loading state
//   const [error, setError] = useState(null); // Track any errors
//   const [checkInDate, setCheckInDate] = useState(null); // State variable for check-in date
//   const [checkOutDate, setCheckOutDate] = useState(null); // State variable for check-out date
//   const [numAdults, setNumAdults] = useState(1); // State variable for number of adults
//   const [numChildren, setNumChildren] = useState(0); // State variable for number of children
//   const [totalPrice, setTotalPrice] = useState(0); // State variable for total booking price
//   const [totalGuests, setTotalGuests] = useState(1); // State variable for total number of guests
//   const [showDatePicker, setShowDatePicker] = useState(false); // State variable to control date picker visibility
//   const [userId, setUserId] = useState(''); // Set user id
//   const [showMessage, setShowMessage] = useState(false); // State variable to control message visibility
//   const [confirmationCode, setConfirmationCode] = useState(''); // State variable for booking confirmation code
//   const [errorMessage, setErrorMessage] = useState(''); // State variable for error message

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true); // Set loading state to true
//         const response = await ApiService.getRoomById(roomId);
//         setRoomDetails(response.room);
//         const userProfile = await ApiService.getUserProfile();
//         setUserId(userProfile.user.id);
//       } catch (error) {
//         setError(error.response?.data?.message || error.message);
//       } finally {
//         setIsLoading(false); // Set loading state to false after fetching or error
//       }
//     };
//     fetchData();
//   }, [roomId]); // Re-run effect when roomId changes


//   const handleConfirmBooking = async () => {
//     // Check if check-in and check-out dates are selected
//     if (!checkInDate || !checkOutDate) {
//       setErrorMessage('Please select check-in and check-out dates.');
//       setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
//       return;
//     }

//     // Check if number of adults and children are valid
//     if (isNaN(numAdults) || numAdults < 1 || isNaN(numChildren) || numChildren < 0) {
//       setErrorMessage('Please enter valid numbers for adults and children.');
//       setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
//       return;
//     }

//     // Calculate total number of days
//     const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
//     const startDate = new Date(checkInDate);
//     const endDate = new Date(checkOutDate);
//     const totalDays = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;

//     // Calculate total number of guests
//     const totalGuests = numAdults + numChildren;

//     // Calculate total price
//     const roomPricePerNight = roomDetails.roomPrice;
//     const totalPrice = roomPricePerNight * totalDays;

//     setTotalPrice(totalPrice);
//     setTotalGuests(totalGuests);
//   };

//   const acceptBooking = async () => {
//     try {

//       // Ensure checkInDate and checkOutDate are Date objects
//       const startDate = new Date(checkInDate);
//       const endDate = new Date(checkOutDate);

//       // Log the original dates for debugging
//       console.log("Original Check-in Date:", startDate);
//       console.log("Original Check-out Date:", endDate);

//       // Convert dates to YYYY-MM-DD format, adjusting for time zone differences
//       const formattedCheckInDate = new Date(startDate.getTime() - (startDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
//       const formattedCheckOutDate = new Date(endDate.getTime() - (endDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];


//       // Log the original dates for debugging
//       console.log("Formated Check-in Date:", formattedCheckInDate);
//       console.log("Formated Check-out Date:", formattedCheckOutDate);

//       // Create booking object
//       const booking = {
//         checkInDate: formattedCheckInDate,
//         checkOutDate: formattedCheckOutDate,
//         numOfAdults: numAdults,
//         numOfChildren: numChildren
//       };
//       console.log(booking)
//       console.log(checkOutDate)

//       // Make booking
//       const response = await ApiService.bookRoom(roomId, userId, booking);
//       if (response.statusCode === 200) {
//         setConfirmationCode(response.bookingConfirmationCode); // Set booking confirmation code
//         setShowMessage(true); // Show message
//         // Hide message and navigate to homepage after 5 seconds
//         setTimeout(() => {
//           setShowMessage(false);
//           navigate('/rooms'); // Navigate to rooms
//         }, 10000);
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || error.message);
//       setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
//     }
//   };

//   if (isLoading) {
//     return <p className='room-detail-loading'>Loading room details...</p>;
//   }

//   if (error) {
//     return <p className='room-detail-loading'>{error}</p>;
//   }

//   if (!roomDetails) {
//     return <p className='room-detail-loading'>Room not found.</p>;
//   }

//   const { roomType, roomPrice, roomPhotoUrl, description, bookings } = roomDetails;

//   return (
//     <div className="room-details-booking">
//       {showMessage && (
//         <p className="booking-success-message">
//           Booking successful! Confirmation code: {confirmationCode}. An SMS and email of your booking details have been sent to you.
//         </p>
//       )}
//       {errorMessage && (
//         <p className="error-message">
//           {errorMessage}
//         </p>
//       )}
//       <h2>Room Details</h2>
//       <br />
//       <img src={roomPhotoUrl} alt={roomType} className="room-details-image" />
//       <div className="room-details-info">
//         <h3>{roomType}</h3>
//         <p>Price: ${roomPrice} / night</p>
//         <p>{description}</p>
//       </div>
//       {bookings && bookings.length > 0 && (
//         <div>
//           <h3>Existing Booking Details</h3>
//           <ul className="booking-list">
//             {bookings.map((booking, index) => (
//               <li key={booking.id} className="booking-item">
//                 <span className="booking-number">Booking {index + 1} </span>
//                 <span className="booking-text">Check-in: {booking.checkInDate} </span>
//                 <span className="booking-text">Out: {booking.checkOutDate}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="booking-info">
//         <button className="book-now-button" onClick={() => setShowDatePicker(true)}>Book Now</button>
//         <button className="go-back-button" onClick={() => setShowDatePicker(false)}>Go Back</button>
//         {showDatePicker && (
//           <div className="date-picker-container">
//             <DatePicker
//               className="detail-search-field"
//               selected={checkInDate}
//               onChange={(date) => setCheckInDate(date)}
//               selectsStart
//               startDate={checkInDate}
//               endDate={checkOutDate}
//               placeholderText="Check-in Date"
//               dateFormat="dd/MM/yyyy"
//               // dateFormat="yyyy-MM-dd"
//             />
//             <DatePicker
//               className="detail-search-field"
//               selected={checkOutDate}
//               onChange={(date) => setCheckOutDate(date)}
//               selectsEnd
//               startDate={checkInDate}
//               endDate={checkOutDate}
//               minDate={checkInDate}
//               placeholderText="Check-out Date"
//               // dateFormat="yyyy-MM-dd"
//               dateFormat="dd/MM/yyyy"
//             />

//             <div className='guest-container'>
//               <div className="guest-div">
//                 <label>Adults:</label>
//                 <input
//                   type="number"
//                   min="1"
//                   value={numAdults}
//                   onChange={(e) => setNumAdults(parseInt(e.target.value))}
//                 />
//               </div>
//               <div className="guest-div">
//                 <label>Children:</label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={numChildren}
//                   onChange={(e) => setNumChildren(parseInt(e.target.value))}
//                 />
//               </div>
//               <button className="confirm-booking" onClick={handleConfirmBooking}>Confirm Booking</button>
//             </div>
//           </div>
//         )}
//         {totalPrice > 0 && (
//           <div className="total-price">
//             <p>Total Price: ${totalPrice}</p>
//             <p>Total Guests: {totalGuests}</p>
//             <button onClick={acceptBooking} className="accept-booking">Accept Booking</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomDetailsPage;





import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ApiService from '../../service/ApiService';

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGuests, setTotalGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getRoomById(roomId);
        setRoomDetails(response.room);
        const userProfile = await ApiService.getUserProfile();
        setUserId(userProfile.user.id);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [roomId]);

  const handleConfirmBooking = () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage('Select check-in and check-out dates.');
      return;
    }

    const days = Math.round((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) + 1;
    const total = roomDetails.roomPrice * days;
    setTotalPrice(total);
    setTotalGuests(numAdults + numChildren);
  };

  const acceptBooking = async () => {
    try {
      const formattedCheckInDate = new Date(checkInDate.getTime() - (checkInDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
      const formattedCheckOutDate = new Date(checkOutDate.getTime() - (checkOutDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

      const booking = {
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
        numOfAdults: numAdults,
        numOfChildren: numChildren
      };

      const response = await ApiService.bookRoom(roomId, userId, booking);
      if (response.statusCode === 200) {
        setConfirmationCode(response.bookingConfirmationCode);
        setShowMessage(true);
        setTimeout(() => {
          navigate('/rooms');
        }, 5000);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading room details...</div>;
  if (!roomDetails) return <div className="text-center py-10 text-red-600">Room not found.</div>;

  return (
    <div className="max-w-4xl   mx-auto p-6 space-y-6 bg-[#e0f2f1] shadow rounded-lg">
      {showMessage && (
        <div className="p-4 text-green-600 bg-green-100 border border-green-400 rounded">
          Booking successful! Confirmation code: {confirmationCode}
        </div>
      )}
      {errorMessage && (
        <div className="p-4 text-red-600 bg-red-100 border border-red-400 rounded">
          {errorMessage}
        </div>
      )}

      <h2 className="text-2xl font-bold">{roomDetails.roomType}</h2>
      <img src={roomDetails.roomPhotoUrl} alt={roomDetails.roomType} className="w-full h-64 object-cover rounded-3xl" />
      <p className="text-lg text-gray-700">${roomDetails.roomPrice} / night</p>
      <p className="text-gray-600">{roomDetails.description}</p>

      {roomDetails.bookings?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mt-6 mb-2">Existing Bookings:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {roomDetails.bookings.map((booking) => (
              <li key={booking.id} className="border p-2 rounded bg-gray-50">
                <span className="font-medium">Check-in:</span> {booking.checkInDate} &nbsp;
                <span className="font-medium">Check-out:</span> {booking.checkOutDate}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          onClick={() => setShowDatePicker(true)}
        >
          Book Now
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black px-8 py-2 rounded-full transition"
          onClick={() => setShowDatePicker(false)}
        >
          Go Back
        </button>
      </div>

      {showDatePicker && (
        <div className="space-y-4 mt-4">
          <div className="flex flex-col md:flex-row gap-4">
            <DatePicker
              selected={checkInDate}
              onChange={setCheckInDate}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              placeholderText="Check-in"
              className="border p-2 rounded w-full"
              dateFormat="dd/MM/yyyy"
            />
            <DatePicker
              selected={checkOutDate}
              onChange={setCheckOutDate}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate}
              placeholderText="Check-out"
              className="border p-2 rounded w-full"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Adults:</label>
              <input
                type="number"
                min="1"
                value={numAdults}
                onChange={(e) => setNumAdults(parseInt(e.target.value))}
                className="border p-2 w-full rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Children:</label>
              <input
                type="number"
                min="0"
                value={numChildren}
                onChange={(e) => setNumChildren(parseInt(e.target.value))}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
          >
            Confirm Booking
          </button>
        </div>
      )}

      {totalPrice > 0 && (
        <div className="mt-6 p-4 border rounded bg-gray-50 space-y-2">
          <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
          <p>Total Guests: {totalGuests}</p>
          <button
            onClick={acceptBooking}
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
          >
            Accept Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomDetailsPage;
