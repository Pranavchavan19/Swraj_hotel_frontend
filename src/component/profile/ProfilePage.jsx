// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await ApiService.getUserProfile();
//                 // Fetch user bookings using the fetched user ID
//                 const userPlusBookings = await ApiService.getUserBookings(response.user.id);
//                 setUser(userPlusBookings.user)

//             } catch (error) {
//                 setError(error.response?.data?.message || error.message);
//             }
//         };

//         fetchUserProfile();
//     }, []);

//     const handleLogout = () => {
//         ApiService.logout();
//         navigate('/home');
//     };

//     const handleEditProfile = () => {
//         navigate('/edit-profile');
//     };
//     return (
//         <div className="profile-page">
//             {user && <h2>Welcome, {user.name}</h2>}
//             <div className="profile-actions">
//                 <button className="edit-profile-button" onClick={handleEditProfile}>Edit Profile</button>
//                 <button className="logout-button" onClick={handleLogout}>Logout</button>
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             {user && (
//                 <div className="profile-details">
//                     <h3>My Profile Details</h3>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
//                 </div>
//             )}
//             <div className="bookings-section">
//                 <h3>My Booking History</h3>
//                 <div className="booking-list">
//                     {user && user.bookings.length > 0 ? (
//                         user.bookings.map((booking) => (
//                             <div key={booking.id} className="booking-item">
//                                 <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
//                                 <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>
//                                 <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
//                                 <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
//                                 <p><strong>Room Type:</strong> {booking.room.roomType}</p>
//                                 <img src={booking.room.roomPhotoUrl} alt="Room" className="room-photo" />
//                             </div>
//                         ))
//                     ) : (
//                         <p>No bookings found.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                const userPlusBookings = await ApiService.getUserBookings(response.user.id);
                setUser(userPlusBookings.user);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };
        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className='p-4 bg-gray-300'>
        <div className="max-w-5xl mx-auto  px-4 py-8">
            <div className='  rounded-3xl'>
            {user && <h2 className="text-2xl font-bold text-center mb-6">Welcome, {user.name}</h2>}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <button
                    onClick={handleEditProfile}
                    className="bg-blue-600 rounded-full text-white px-6 py-2  hover:bg-blue-700 transition"
                >
                    Edit Profile
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 rounded-full text-white px-6 py-2  hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
            </div>

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            {user && (
                <div className="bg-white shadow-md rounded-3xl p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4 border-b pb-2">My Profile Details</h3>
                    <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                </div>
            )}

            <div className="bg-white shadow-md rounded-3xl p-6">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">My Booking History</h3>
                {user && user.bookings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {user.bookings.map((booking) => (
                            <div key={booking.id} className="border p-4 rounded-lg shadow-sm">
                                <p><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</p>
                                <p><strong>Check-in:</strong> {booking.checkInDate}</p>
                                <p><strong>Check-out:</strong> {booking.checkOutDate}</p>
                                <p><strong>Total Guests:</strong> {booking.totalNumOfGuest}</p>
                                <p><strong>Room Type:</strong> {booking.room.roomType}</p>
                                <img
                                    src={booking.room.roomPhotoUrl}
                                    alt="Room"
                                    className="w-full h-48 object-cover mt-2 rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
