// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';
// import Pagination from '../common/Pagination';

// const ManageBookingsPage = () => {
//     const [bookings, setBookings] = useState([]);
//     const [filteredBookings, setFilteredBookings] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [bookingsPerPage] = useState(6);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const response = await ApiService.getAllBookings();
//                 const allBookings = response.bookingList;
//                 setBookings(allBookings);
//                 setFilteredBookings(allBookings);
//             } catch (error) {
//                 console.error('Error fetching bookings:', error.message);
//             }
//         };

//         fetchBookings();
//     }, []);

//     useEffect(() => {
//         filterBookings(searchTerm);
//     }, [searchTerm, bookings]);

//     const filterBookings = (term) => {
//         if (term === '') {
//             setFilteredBookings(bookings);
//         } else {
//             const filtered = bookings.filter((booking) =>
//                 booking.bookingConfirmationCode && booking.bookingConfirmationCode.toLowerCase().includes(term.toLowerCase())
//             );
//             setFilteredBookings(filtered);
//         }
//         setCurrentPage(1);
//     };

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const indexOfLastBooking = currentPage * bookingsPerPage;
//     const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
//     const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <div className='bookings-container'>
//             <h2>All Bookings</h2>
//             <div className='search-div'>
//                 <label>Filter by Booking Number:</label>
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     placeholder="Enter booking number"
//                 />
//             </div>

//             <div className="booking-results">
//                 {currentBookings.map((booking) => (
//                     <div key={booking.id} className="booking-result-item">
//                         <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
//                         <p><strong>Check In Date:</strong> {booking.checkInDate}</p>
//                         <p><strong>Check out Date:</strong> {booking.checkOutDate}</p>
//                         <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
//                         <button
//                             className="edit-room-button"
//                             onClick={() => navigate(`/admin/edit-booking/${booking.bookingConfirmationCode}`)}
//                         >Manage Booking</button>
//                     </div>
//                 ))}
//             </div>

//             <Pagination
//                 roomsPerPage={bookingsPerPage}
//                 totalRooms={filteredBookings.length}
//                 currentPage={currentPage}
//                 paginate={paginate}
//             />
//         </div>
//     );
// };

// export default ManageBookingsPage;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';

const ManageBookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [bookingsPerPage] = useState(6);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await ApiService.getAllBookings();
                const allBookings = response.bookingList;
                setBookings(allBookings);
                setFilteredBookings(allBookings);
            } catch (error) {
                console.error('Error fetching bookings:', error.message);
            }
        };
        fetchBookings();
    }, []);

    useEffect(() => {
        filterBookings(searchTerm);
    }, [searchTerm, bookings]);

    const filterBookings = (term) => {
        if (term === '') {
            setFilteredBookings(bookings);
        } else {
            const filtered = bookings.filter((booking) =>
                booking.bookingConfirmationCode &&
                booking.bookingConfirmationCode.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredBookings(filtered);
        }
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="px-4 bg-[#e0f2f1] py-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">All Bookings</h2>

            <div className="mb-6 p-4">
                <label className="block text-gray-700 mb-2 font-medium">
                    Filter by Booking Number:
                </label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Enter booking number"
                    className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-1 p-4   md:grid-cols-2 lg:grid-cols-3">
                {currentBookings.map((booking) => (
                    <div key={booking.id} className="bg-white shadow-md rounded-3xl p-5 border border-gray-200 hover:shadow-lg transition duration-200">
                        <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                        <p><strong>Check-In Date:</strong> {booking.checkInDate}</p>
                        <p><strong>Check-Out Date:</strong> {booking.checkOutDate}</p>
                        <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
                        <button
                            onClick={() => navigate(`/admin/edit-booking/${booking.bookingConfirmationCode}`)}
                            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
                        >
                            Manage Booking
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <Pagination
                    roomsPerPage={bookingsPerPage}
                    totalRooms={filteredBookings.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default ManageBookingsPage;


