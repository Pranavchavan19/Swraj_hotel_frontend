// import React , {useEffect , useState} from "react";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
// import ApiService from "../../service/ApiService";


// const RoomSearch = ({handleSearchResult}) => {

//     const [startDate , setStartDate] = useState(null);
//     const [endDate , setEndDate] = useState(null);
//     const [roomType , setRoomType] = useState('');
//     const [roomTypes , setRoomTypes] = useState([]);
//     const [error , setError] = useState('');

//     useEffect( () => {
//         const fetchRoomTypes = async  () => {

//             try{
//                    const types  = await ApiService.getRoomTypes();
//                    setRoomTypes(types);
//             }catch(err){
//                 console.log(err.message);
                
//             }
//         }
//         fetchRoomTypes();
//     },[])
    

//     const showError = (message , timeOut = 5000) => {
//         setError(message);
//         setTimeout( () => {
//             setError('');
//         },timeOut)
//     }


//     const handleInternalSearch = async  () => {
//         if(!startDate || !endDate || !roomType){
//              showError("Please Select all fields");
//              return false;
//         }

//     try{
//           const formattedStartDate = startDate ? startDate.toISOString().split('T')[0]: null;
//           const formattedEndDate = endDate ? endDate.toISOString().split('T')[0]: null;

//           const response = await ApiService.getAvailableRoomsByDateAndType( formattedStartDate , formattedEndDate, roomType);

//           if(response.setStatusCode === 200){
//             if(response.roomList.length === 0){
//                 showError("Room is not currently Available for the room type and selected date range");
//                 return;
//             }

//             handleSearchResult(response.roomList);
//             setError('');
//           }

//     }catch(err){
//            showError(err.response.date.message)
//     }
// }


//     return (
//         <section>
//           <div className="search-container">
//             <div className="search-field">
//               <label>Check-in Date</label>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 dateFormat="dd/MM/yyyy"
//                 placeholderText="Select Check-in Date"
//               />
//             </div>
//             <div className="search-field">
//               <label>Check-out Date</label>
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date) => setEndDate(date)}
//                 dateFormat="dd/MM/yyyy"
//                 placeholderText="Select Check-out Date"
//               />
//             </div>
    
//             <div className="search-field">
//               <label>Room Type</label>
//               <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
//                 <option disabled value="">
//                   Select Room Type
//                 </option>
//                 {roomTypes.map((roomType) => (
//                   <option key={roomType} value={roomType}>
//                     {roomType}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button className="home-search-button" onClick={handleInternalSearch}>
//               Search Rooms
//             </button>
//           </div>
//           {error && <p className="error-message">{error}</p>}
//         </section>
//       );

// }

// export default RoomSearch; 





// import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import ApiService from "../../service/ApiService";

// const RoomSearch = ({ handleSearchResult }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [roomType, setRoomType] = useState("");
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchRoomTypes = async () => {
//       try {
//         const types = await ApiService.getRoomTypes();
//         console.log("Room types fetched:", types);

//         // Accept both array and object response shapes
//         if (Array.isArray(types)) {
//           setRoomTypes(types);
//         } else if (types && Array.isArray(types.roomTypes)) {
//           setRoomTypes(types.roomTypes);
//         } else {
//           setRoomTypes([]);
//           console.warn("Unexpected roomTypes response format:", types);
//         }
//       } catch (err) {
//         console.error("Error fetching room types:", err.message);
//         setRoomTypes([]);
//       }
//     };

//     fetchRoomTypes();
//   }, []);

//   const showError = (message, timeOut = 5000) => {
//     setError(message);
//     setTimeout(() => {
//       setError("");
//     }, timeOut);
//   };

//   const handleInternalSearch = async () => {
//     if (!startDate || !endDate || !roomType) {
//       showError("Please select all fields");
//       return;
//     }

//     try {
//       const formattedStartDate = startDate.toISOString().split("T")[0];
//       const formattedEndDate = endDate.toISOString().split("T")[0];

//       const response = await ApiService.getAvailableRoomsByDateAndType(
//         formattedStartDate,
//         formattedEndDate,
//         roomType
//       );

//       if (response.statusCode === 200) {
//         if (!response.roomList || response.roomList.length === 0) {
//           showError("Room is not currently available for the selected type and date range");
//           return;
//         }

//         handleSearchResult(response.roomList);
//         setError("");
//       } else {
//         showError(response.message || "Failed to fetch rooms");
//       }
//     } catch (err) {
//       console.error("Search error:", err);
//       showError(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <section>
//       <div className="search-container">
//         <div className="search-field">
//           <label>Check-in Date</label>
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             dateFormat="dd/MM/yyyy"
//             placeholderText="Select Check-in Date"
//           />
//         </div>
//         <div className="search-field">
//           <label>Check-out Date</label>
//           <DatePicker
//             selected={endDate}
//             onChange={(date) => setEndDate(date)}
//             dateFormat="dd/MM/yyyy"
//             placeholderText="Select Check-out Date"
//           />
//         </div>

//         <div className="search-field">
//           <label>Room Type</label>
//           <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
//             <option disabled value="">
//               Select Room Type
//             </option>
//             {roomTypes.map((roomType, index) => (
//               <option key={index} value={roomType}>
//                 {roomType}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button className="home-search-button" onClick={handleInternalSearch}>
//           Search Rooms
//         </button>
//       </div>

//       {error && <p className="error-message">{error}</p>}
//     </section>
//   );
// };

// export default RoomSearch;











import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../../service/ApiService";

const RoomSearch = ({ handleSearchResult }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();

        if (Array.isArray(types)) {
          setRoomTypes(types);
        } else if (types && Array.isArray(types.roomTypes)) {
          setRoomTypes(types.roomTypes);
        } else {
          setRoomTypes([]);
          console.warn("Unexpected roomTypes response format:", types);
        }
      } catch (err) {
        console.error("Error fetching room types:", err.message);
        setRoomTypes([]);
      }
    };

    fetchRoomTypes();
  }, []);

  const showError = (message, timeOut = 5000) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, timeOut);
  };

  const handleInternalSearch = async () => {
    if (!startDate || !endDate || !roomType) {
      showError("Please select all fields");
      return;
    }

    try {
      const formattedStartDate = startDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];

      const response = await ApiService.getAvailableRoomsByDateAndType(
        formattedStartDate,
        formattedEndDate,
        roomType
      );

      if (response.statusCode === 200) {
        if (!response.roomList || response.roomList.length === 0) {
          showError("Room is not available for the selected type and dates");
          return;
        }

        handleSearchResult(response.roomList);
        setError("");
      } else {
        showError(response.message || "Failed to fetch rooms");
      }
    } catch (err) {
      console.error("Search error:", err);
      showError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
  <div className="bg-[#e0f2f1] dark:bg-black">
    <div className="rounded-3xl border-4 p-4 border-white bg-white dark:bg-gray-900 overflow-hidden shadow-md">
      {/* First row: Check-in and Check-out */}
      <div className="flex flex-row md:flex-col gap-4 mb-4">
        {/* Check-in */}
        <div className="flex-1 relative">
          <label className=" hidden md:block hitext-sm font-medium text-gray-700 mb-1 ">Check-in Date</label>
          <div className="w-full">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-in"
              className="w-full border border-gray-300 rounded-md pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>



        {/* Check-out */}
        <div className="flex-1 relative">
          <label className="hidden md:block hitext-sm font-medium text-gray-700 mb-1 ">Check-out Date</label>
          <div className="relative w-fit">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-out"
              className="w-full border border-gray-300 rounded-md pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Second row: Room type and Search */}
      <div className="flex flex-col md:flex-col gap-4">
        {/* Room Type */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          >
            <option disabled value="">Select Room Type</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex-1">
         
          <button
            onClick={handleInternalSearch}
            className="w-full rounded-full  bg-orange-600 text-white font-semibold py-3 px-4  hover:bg-teal-700 transition duration-200 text-sm"
          >
            Search Rooms
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-4 text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  </div>
);

   
 
    
  
};

export default RoomSearch;
