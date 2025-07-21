// import React, { useState } from 'react';
// import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js

// const FindBookingPage = () => {
//     const [confirmationCode, setConfirmationCode] = useState(''); // State variable for confirmation code
//     const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
//     const [error, setError] = useState(null); // Track any errors

//     const handleSearch = async () => {
//         if (!confirmationCode.trim()) {
//             setError("Please Enter a booking confirmation code");
//             setTimeout(() => setError(''), 5000);
//             return;
//         }
//         try {
//             // Call API to get booking details
//             const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
//             setBookingDetails(response.booking);
//             setError(null); // Clear error if successful
//         } catch (error) {
//             setError(error.response?.data?.message || error.message);
//             setTimeout(() => setError(''), 5000);
//         }
//     };

//     return (
//         <div className="find-booking-page">
//             <h2>Find Booking</h2>
//             <div className="search-container">
//                 <input
//                     required
//                     type="text"
//                     placeholder="Enter your booking confirmation code"
//                     value={confirmationCode}
//                     onChange={(e) => setConfirmationCode(e.target.value)}
//                 />
//                 <button onClick={handleSearch}>Find</button>
//             </div>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {bookingDetails && (
//                 <div className="booking-details">
//                     <h3>Booking Details</h3>
//                     <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
//                     <p>Check-in Date: {bookingDetails.checkInDate}</p>
//                     <p>Check-out Date: {bookingDetails.checkOutDate}</p>
//                     <p>Num Of Adults: {bookingDetails.numOfAdults}</p>
//                     <p>Num Of Children: {bookingDetails.numOfChildren}</p>

//                     <br />
//                     <hr />
//                     <br />
//                     <h3>Booker Detials</h3>
//                     <div>
//                         <p> Name: {bookingDetails.user.name}</p>
//                         <p> Email: {bookingDetails.user.email}</p>
//                         <p> Phone Number: {bookingDetails.user.phoneNumber}</p>
//                     </div>

//                     <br />
//                     <hr />
//                     <br />
//                     <h3>Room Details</h3>
//                     <div>
//                         <p> Room Type: {bookingDetails.room.roomType}</p>
//                         <img src={bookingDetails.room.roomPhotoUrl} alt="" sizes="" srcSet="" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FindBookingPage;









import React, { useState } from 'react';
import ApiService from '../../service/ApiService';

const FindBookingPage = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!confirmationCode.trim()) {
      setError("Please enter a booking confirmation code");
      setTimeout(() => setError(''), 5000);
      return;
    }

    try {
      const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
      setBookingDetails(response.booking);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setTimeout(() => setError(''), 5000);
    }
  };

  return (
    <div className='p-4'>
    <div className="mt-8 bg-slate-400 rounded-2xl  flex flex-col items-center justify-center p-4 sm:p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl  font-semibold mb-4 text-center">Find Booking</h2>

      <div className="w-full rounded-full flex flex-col sm:flex-row items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter your booking confirmation code"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
          className="w-full sm:w-3/4 px-4 py-2 border border-gray-300  focus:outline-none rounded-full focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Find
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {bookingDetails && (
        <div className="w-full  bg-white p-4 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Booking Details</h3>
            <p><strong>Confirmation Code:</strong> {bookingDetails.bookingConfirmationCode}</p>
            <p><strong>Check-in Date:</strong> {bookingDetails.checkInDate}</p>
            <p><strong>Check-out Date:</strong> {bookingDetails.checkOutDate}</p>
            <p><strong>Adults:</strong> {bookingDetails.numOfAdults}</p>
            <p><strong>Children:</strong> {bookingDetails.numOfChildren}</p>
          </div>

          <hr />

          <div>
            <h3 className="text-xl font-semibold mb-2">Booker Details</h3>
            <p><strong>Name:</strong> {bookingDetails.user.name}</p>
            <p><strong>Email:</strong> {bookingDetails.user.email}</p>
            <p><strong>Phone:</strong> {bookingDetails.user.phoneNumber}</p>
          </div>

          <hr />

          <div>
            <h3 className="text-xl font-semibold mb-2">Room Details</h3>
            <p><strong>Room Type:</strong> {bookingDetails.room.roomType}</p>
            <img
              src={bookingDetails.room.roomPhotoUrl}
              alt="Room"
              className="w-full max-w-md rounded-md mt-2"
            />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default FindBookingPage;
