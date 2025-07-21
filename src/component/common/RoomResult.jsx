// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import ApiService from '../../service/ApiService';

// const RoomResult = ({ roomSearchResults }) => {
//     const navigate = useNavigate(); // Initialize useNavigate hook
//     const isAdmin = ApiService.isAdmin();
//     return (
//         <section className="room-results">
//             {roomSearchResults && roomSearchResults.length > 0 && (
//                 <div className="room-list">
//                     {roomSearchResults.map(room => (
//                         <div key={room.id} className="room-list-item">
//                             <img className='room-list-item-image' src={room.roomPhotoUrl} alt={room.roomType} />
//                             <div className="room-details">
//                                 <h3>{room.roomType}</h3>
//                                 <p>Price: ${room.roomPrice} / night</p>
//                                 <p>Description: {room.roomDescription}</p>
//                             </div>

//                             <div className='book-now-div'>
//                                 {isAdmin ? (
//                                     <button
//                                         className="edit-room-button"
//                                         onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
//                                     >
//                                         Edit Room
//                                     </button>
//                                 ) : (
//                                     <button
//                                         className="book-now-button"
//                                         onClick={() => navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
//                                     >
//                                         View/Book Now
//                                     </button>
//                                 )}
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             )}
//         </section>
//     );
// }

// export default RoomResult;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const RoomResult = ({ roomSearchResults }) => {
    const navigate = useNavigate();
    const isAdmin = ApiService.isAdmin();

    return (
        <section className="py-6 px-4 bg-[#e0f2f1] sm:px-6 lg:px-8">
            {roomSearchResults && roomSearchResults.length > 0 && (
                <div className="grid gap-6  rounded-3xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {roomSearchResults.map(room => (
                        <div key={room.id} className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col h-full">
                            <img
                                className="h-48 w-full object-cover"
                                src={room.roomPhotoUrl}
                                alt={room.roomType}
                            />
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{room.roomType}</h3>
                                    <p className="text-gray-600">Price: ₹{room.roomPrice} / night</p>
                                    <p className="text-gray-500 mt-2">{room.roomDescription}</p>
                                </div>

                                <div className="mt-4">
                                    {isAdmin ? (
                                        <button
                                            className="w-full bg-yellow-500 rounded-full hover:bg-yellow-600 text-white font-semibold py-2 px-4  transition"
                                            onClick={() => navigate(`/admin/edit-room/${room.id}`)}
                                        >
                                            Edit Room
                                        </button>
                                    ) : (
                                        <button
                                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition"
                                            onClick={() => navigate(`/room-details-book/${room.id}`)}
                                        >
                                            View / Book Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default RoomResult;
