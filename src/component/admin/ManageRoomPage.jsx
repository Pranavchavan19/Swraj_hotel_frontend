// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';
// import Pagination from '../common/Pagination';
// import RoomResult from '../common/RoomResult';

// const ManageRoomPage = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [selectedRoomType, setSelectedRoomType] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [roomsPerPage] = useState(5);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await ApiService.getAllRooms();
//         const allRooms = response.roomList;
//         setRooms(allRooms);
//         setFilteredRooms(allRooms);
//       } catch (error) {
//         console.error('Error fetching rooms:', error.message);
//       }
//     };

//     const fetchRoomTypes = async () => {
//       try {
//         const types = await ApiService.getRoomTypes();
//         setRoomTypes(types);
//       } catch (error) {
//         console.error('Error fetching room types:', error.message);
//       }
//     };

//     fetchRooms();
//     fetchRoomTypes();
//   }, []);

//   const handleRoomTypeChange = (e) => {
//     setSelectedRoomType(e.target.value);
//     filterRooms(e.target.value);
//   };

//   const filterRooms = (type) => {
//     if (type === '') {
//       setFilteredRooms(rooms);
//     } else {
//       const filtered = rooms.filter((room) => room.roomType === type);
//       setFilteredRooms(filtered);
//     }
//     setCurrentPage(1); // Reset to first page after filtering
//   };

//   // Pagination
//   const indexOfLastRoom = currentPage * roomsPerPage;
//   const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
//   const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='all-rooms'>
//       <h2>All Rooms</h2>
//       <div className='all-room-filter-div' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div className='filter-select-div'>
//           <label>Filter by Room Type:</label>
//           <select value={selectedRoomType} onChange={handleRoomTypeChange}>
//             <option value="">All</option>
//             {roomTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//           <button className='add-room-button' onClick={() => navigate('/admin/add-room')}>
//             Add Room
//           </button>
//         </div>
//       </div>

//       <RoomResult roomSearchResults={currentRooms} />

//       <Pagination
//         roomsPerPage={roomsPerPage}
//         totalRooms={filteredRooms.length}
//         currentPage={currentPage}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default ManageRoomPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';
// import Pagination from '../common/Pagination';
// import RoomResult from '../common/RoomResult';

// const ManageRoomPage = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [selectedRoomType, setSelectedRoomType] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [roomsPerPage] = useState(5);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await ApiService.getAllRooms();
//         const allRooms = response.roomList || []; // fallback if response is undefined
//         setRooms(allRooms);
//         setFilteredRooms(allRooms);
//       } catch (error) {
//         console.error('Error fetching rooms:', error.message);
//       }
//     };

//     const fetchRoomTypes = async () => {
//       try {
//         const types = await ApiService.getRoomTypes();

//         // ✅ handle API returning an object like { roomTypes: [...] }
//         if (Array.isArray(types)) {
//           setRoomTypes(types);
//         } else if (Array.isArray(types.roomTypes)) {
//           setRoomTypes(types.roomTypes);
//         } else {
//           console.error("Invalid roomTypes format:", types);
//           setRoomTypes([]); // fallback
//         }
//       } catch (error) {
//         console.error('Error fetching room types:', error.message);
//         setRoomTypes([]); // fallback on error
//       }
//     };

//     fetchRooms();
//     fetchRoomTypes();
//   }, []);

//   const handleRoomTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setSelectedRoomType(selectedType);
//     filterRooms(selectedType);
//   };

//   const filterRooms = (type) => {
//     if (type === '') {
//       setFilteredRooms(rooms);
//     } else {
//       const filtered = rooms.filter((room) => room.roomType === type);
//       setFilteredRooms(filtered);
//     }
//     setCurrentPage(1); // Reset to first page after filtering
//   };

//   // Pagination
//   const indexOfLastRoom = currentPage * roomsPerPage;
//   const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
//   const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='all-rooms'>
//       <h2>All Rooms</h2>
//       <div
//         className='all-room-filter-div'
//         style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
//       >
//         <div className='filter-select-div'>
//           <label>Filter by Room Type:</label>
//           <select value={selectedRoomType} onChange={handleRoomTypeChange}>
//             <option value="">All</option>
//             {roomTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>

//           <button className='add-room-button' onClick={() => navigate('/admin/add-room')}>
//             Add Room
//           </button>
//         </div>
//       </div>

//       <RoomResult roomSearchResults={currentRooms} />

//       <Pagination
//         roomsPerPage={roomsPerPage}
//         totalRooms={filteredRooms.length}
//         currentPage={currentPage}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default ManageRoomPage;




import React, { useState, useEffect } from 'react';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';
import RoomResult from '../common/RoomResult';
import RoomSearch from '../common/RoomSearch';

const AllRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);

  const handleSearchResult = (results) => {
    setRooms(results);
    setFilteredRooms(results);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await ApiService.getAllRooms();
        const allRooms = response.roomList;
        setRooms(allRooms);
        setFilteredRooms(allRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    };

    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();

        if (Array.isArray(types)) {
          setRoomTypes(types);
        } else if (Array.isArray(types.roomTypes)) {
          setRoomTypes(types.roomTypes);
        } else {
          console.error("Unexpected room types format:", types);
          setRoomTypes([]);
        }
      } catch (error) {
        console.error('Error fetching room types:', error.message);
        setRoomTypes([]);
      }
    };

    fetchRooms();
    fetchRoomTypes();
  }, []);

  const handleRoomTypeChange = (e) => {
    const selected = e.target.value;
    setSelectedRoomType(selected);
    filterRooms(selected);
  };

  const filterRooms = (type) => {
    if (type === '') {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.roomType === type);
      setFilteredRooms(filtered);
    }
    setCurrentPage(1);
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F7FA] to-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-[#007F86] mb-10">Search Rooms</h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
          <h3 className="text-xl font-semibold text-[#007F86] mb-4">Search</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-xl p-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium">Check-in</label>
                <input type="date" className="rounded-xl border border-gray-300 px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Check-out</label>
                <input type="date" className="rounded-xl border border-gray-300 px-3 py-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium">Guests</label>
                <input type="number" placeholder="Guests" className="rounded-xl border border-gray-300 px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Room Type</label>
                <select
                  value={selectedRoomType}
                  onChange={handleRoomTypeChange}
                  className="rounded-xl border border-gray-300 px-3 py-2"
                >
                  <option value="">All</option>
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full bg-[#F25C4D] text-white font-semibold py-3 rounded-xl hover:bg-[#e04e3f] transition">Search</button>
        </div>

        <div className="mb-10">
          <RoomSearch handleSearchResult={handleSearchResult} />
        </div>

        <div className="mb-10">
          <RoomResult roomSearchResults={currentRooms} />
        </div>

        <div className="mb-16">
          <Pagination
            roomsPerPage={roomsPerPage}
            totalRooms={filteredRooms.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>

        {/* <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#007F86] mb-4">Our Services</h3>
          <div className="grid gap-4">
            <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-xl">
              <div className="text-2xl">🍽️</div>
              <div>
                <h4 className="font-semibold text-lg">Restaurant</h4>
                <p className="text-sm text-gray-600">Indulge in gourmet dishes and refined ambiance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-100 p-4 rounded-xl">
              <div className="text-2xl">🏋️</div>
              <div>
                <h4 className="font-semibold text-lg">Fitness Center</h4>
                <p className="text-sm text-gray-600">Stay fit during your stay with our modern gym.</p>
              </div>
            </div>
          </div>
        </div> */}


      </div>
      
        <p className="text-center text-sm  text-gray-500 mt-12">©2024 HotelBooking. All rights reserved.</p>
    </div>
  );
};

export default AllRoomsPage;
