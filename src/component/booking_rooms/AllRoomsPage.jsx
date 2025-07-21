// import React, { useState, useEffect } from 'react';
// import ApiService from '../../service/ApiService';
// import Pagination from '../common/Pagination';
// import RoomResult from '../common/RoomResult';
// import RoomSearch from '../common/RoomSearch';



// const AllRoomsPage = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [selectedRoomType, setSelectedRoomType] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [roomsPerPage] = useState(5);

//   // Function to handle search results
//   const handleSearchResult = (results) => {
//     setRooms(results);
//     setFilteredRooms(results);
//   };


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
//       <div className='all-room-filter-div'>
//         <label>Filter by Room Type:</label>
//         <select value={selectedRoomType} onChange={handleRoomTypeChange}>
//           <option value="">All</option>
//           {roomTypes.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>
      
//       <RoomSearch handleSearchResult={handleSearchResult} />
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

// export default AllRoomsPage;











// import React, { useState, useEffect } from 'react';
// import ApiService from '../../service/ApiService';
// import Pagination from '../common/Pagination';
// import RoomResult from '../common/RoomResult';
// import RoomSearch from '../common/RoomSearch';

// const AllRoomsPage = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [selectedRoomType, setSelectedRoomType] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [roomsPerPage] = useState(5);

//   const handleSearchResult = (results) => {
//     setRooms(results);
//     setFilteredRooms(results);
//   };

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

//         // ✅ Safe array check
//         if (Array.isArray(types)) {
//           setRoomTypes(types);
//         } else if (Array.isArray(types.roomTypes)) {
//           setRoomTypes(types.roomTypes);
//         } else {
//           console.error("Unexpected room types format:", types);
//           setRoomTypes([]);
//         }
//       } catch (error) {
//         console.error('Error fetching room types:', error.message);
//         setRoomTypes([]);
//       }
//     };

//     fetchRooms();
//     fetchRoomTypes();
//   }, []);

//   const handleRoomTypeChange = (e) => {
//     const selected = e.target.value;
//     setSelectedRoomType(selected);
//     filterRooms(selected);
//   };

//   const filterRooms = (type) => {
//     if (type === '') {
//       setFilteredRooms(rooms);
//     } else {
//       const filtered = rooms.filter((room) => room.roomType === type);
//       setFilteredRooms(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const indexOfLastRoom = currentPage * roomsPerPage;
//   const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
//   const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='all-rooms'>
//       <h2>All Rooms</h2>
//       <div className='all-room-filter-div'>
//         <label>Filter by Room Type:</label>
//         <select value={selectedRoomType} onChange={handleRoomTypeChange}>
//           <option value="">All</option>
//           {roomTypes.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       <RoomSearch handleSearchResult={handleSearchResult} />
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

// export default AllRoomsPage;





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
          console.error('Unexpected room types format:', types);
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
    <div className="p-6 max-w-6xl bg-[#e0f2f1] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Rooms</h2>

      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow mb-6">
        <label className="text-gray-700 font-medium mb-2 sm:mb-0">Filter by Room Type:</label>
        <select
          value={selectedRoomType}
          onChange={handleRoomTypeChange}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-auto"
        >
          <option value="">All</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 bg-black">
        <RoomSearch handleSearchResult={handleSearchResult} />
      </div>

      <div className="mb-6 bg-gray-300 rounded-3xl">
        <RoomResult roomSearchResults={currentRooms} />
      </div>

      <div className="mt-8">
        <Pagination
          roomsPerPage={roomsPerPage}
          totalRooms={filteredRooms.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllRoomsPage;
