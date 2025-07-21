// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js

// const EditBookingPage = () => {
//     const navigate = useNavigate();
//     const { bookingCode } = useParams();
//     const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
//     const [error, setError] = useState(null); // Track any errors
//     const [success, setSuccessMessage] = useState(null); // Track any errors



//     useEffect(() => {
//         const fetchBookingDetails = async () => {
//             try {
//                 const response = await ApiService.getBookingByConfirmationCode(bookingCode);
//                 setBookingDetails(response.booking);
//             } catch (error) {
//                 setError(error.message);
//             }
//         };

//         fetchBookingDetails();
//     }, [bookingCode]);


//     const acheiveBooking = async (bookingId) => {
//         if (!window.confirm('Are you sure you want to Acheive this booking?')) {
//             return; // Do nothing if the user cancels
//         }

//         try {
//             const response = await ApiService.cancelBooking(bookingId);
//             if (response.statusCode === 200) {
//                 setSuccessMessage("The boking was Successfully Acheived")
                
//                 setTimeout(() => {
//                     setSuccessMessage('');
//                     navigate('/admin/manage-bookings');
//                 }, 3000);
//             }
//         } catch (error) {
//             setError(error.response?.data?.message || error.message);
//             setTimeout(() => setError(''), 5000);
//         }
//     };

//     return (
//         <div className="find-booking-page">
//             <h2>Booking Detail</h2>
//             {error && <p className='error-message'>{error}</p>}
//             {success && <p className='success-message'>{success}</p>}
//             {bookingDetails && (
//                 <div className="booking-details">
//                     <h3>Booking Details</h3>
//                     <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
//                     <p>Check-in Date: {bookingDetails.checkInDate}</p>
//                     <p>Check-out Date: {bookingDetails.checkOutDate}</p>
//                     <p>Num Of Adults: {bookingDetails.numOfAdults}</p>
//                     <p>Num Of Children: {bookingDetails.numOfChildren}</p>
//                     <p>Guest Email: {bookingDetails.guestEmail}</p>

//                     <br />
//                     <hr />
//                     <br />
//                     <h3>User Who Made the Booking </h3>
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
//                         <p> Room Price: ${bookingDetails.room.roomPrice}</p>
//                         <p> Room Description: {bookingDetails.room.roomDescription}</p>
//                         <img src={bookingDetails.room.roomPhotoUrl} alt="" sizes="" srcSet="" />
//                     </div>
//                     <button
//                         className="acheive-booking"
//                         onClick={() => acheiveBooking(bookingDetails.id)}>Acheive Booking
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default EditBookingPage;










import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const EditBookingPage = () => {
    const navigate = useNavigate();
    const { bookingCode } = useParams();

    const [bookingDetails, setBookingDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await ApiService.getBookingByConfirmationCode(bookingCode);
                setBookingDetails(response.booking);
            } catch (error) {
                setError(error?.response?.data?.message || error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBookingDetails();
    }, [bookingCode]);

    const archiveBooking = async (bookingId) => {
        if (!window.confirm('Are you sure you want to archive this booking?')) return;

        try {
            const response = await ApiService.cancelBooking(bookingId);
            if (response.statusCode === 200) {
                setSuccessMessage("The booking was successfully archived.");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/admin/manage-bookings');
                }, 3000);
            }
        } catch (error) {
            setError(error?.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="p-4 sm:p-6 max-w-4xl mx-auto bg-[#e0f2f1] shadow rounded-3xl mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Booking Details</h2>

            {loading && <p className="text-center text-gray-500">Loading booking details...</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}
            {success && <p className="text-green-600 text-center">{success}</p>}

            {bookingDetails && (
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center justify-items-center">Booking Info</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center text-gray-700">
                            <p><strong>Code:</strong> {bookingDetails.bookingConfirmationCode}</p>
                            <p><strong>Check-in:</strong> {bookingDetails.checkInDate}</p>
                            <p><strong>Check-out:</strong> {bookingDetails.checkOutDate}</p>
                            <p><strong>Adults:</strong> {bookingDetails.numOfAdults}</p>
                            <p><strong>Children:</strong> {bookingDetails.numOfChildren}</p>
                            <p><strong>Email:</strong> {bookingDetails.guestEmail}</p>
                        </div>
                    </section>

                    <hr />

                    <section>
                        <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">User Info</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            <p><strong>Name:</strong> {bookingDetails.user.name}</p>
                            <p><strong>Email:</strong> {bookingDetails.user.email}</p>
                            <p><strong>Phone:</strong> {bookingDetails.user.phoneNumber}</p>
                        </div>
                    </section>

                    <hr />

                    <section>
                        <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">Room Info</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            <p><strong>Type:</strong> {bookingDetails.room.roomType}</p>
                            <p><strong>Price:</strong> ${bookingDetails.room.roomPrice}</p>
                            <p className="sm:col-span-2">
                                <strong>Description:</strong> {bookingDetails.room.roomDescription}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <img
                                src={bookingDetails.room.roomPhotoUrl}
                                alt="Room"
                                className="w-full sm:w-80 h-auto rounded-full shadow"
                            />
                        </div>
                    </section>

                    <div className="text-center mt-6">
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition"
                            onClick={() => archiveBooking(bookingDetails.id)}
                        >
                            Archive Booking
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditBookingPage;
