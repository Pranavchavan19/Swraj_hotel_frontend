// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from '../../service/ApiService';

// const AdminPage = () => {
//     const [adminName, setAdminName] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchAdminName = async () => {
//             try {
//                 const response = await ApiService.getUserProfile();
//                 setAdminName(response.user.name);
//             } catch (error) {
//                 console.error('Error fetching admin details:', error.message);
//             }
//         };

//         fetchAdminName();
//     }, []);

//     return (
//         <div className="admin-page">
//             <h1 className="welcome-message">Welcome, {adminName}</h1>
//             <div className="admin-actions">
//                 <button className="admin-button" onClick={() => navigate('/admin/manage-rooms')}>
//                     Manage Rooms
//                 </button>
//                 <button className="admin-button" onClick={() => navigate('/admin/manage-bookings')}>
//                     Manage Bookings
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default AdminPage;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from '../../service/ApiService';

// const AdminPage = () => {
//     const [adminName, setAdminName] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchAdminName = async () => {
//             try {
//                 const response = await ApiService.getUserProfile();
//                 setAdminName(response.user.name);
//             } catch (error) {
//                 console.error('Error fetching admin details:', error.message);
//             }
//         };

//         fetchAdminName();
//     }, []);

//     return (
//         <div className="p-6  bg-[#e0f2f1]  max-w-4xl  mx-auto">
//             <h1 className="text-3xl font-bold mt-5 mb-6 text-center">
//                 Welcome, {adminName}
//             </h1>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                     className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
//                     onClick={() => navigate('/admin/manage-rooms')}
//                 >
//                     Manage Rooms
//                 </button>
//                 <button
//                     className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition"
//                     onClick={() => navigate('/admin/manage-bookings')}
//                 >
//                     Manage Bookings
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AdminPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

const AdminPage = () => {
  const [adminName, setAdminName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminName = async () => {
      try {
        const response = await ApiService.getUserProfile();
        setAdminName(response.user.name);
      } catch (error) {
        console.error("Error fetching admin details:", error.message);
      }
    };

    fetchAdminName();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e0f2f1] p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Welcome, {adminName}
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
            onClick={() => navigate("/admin/manage-rooms")}
          >
            Manage Rooms
          </button>

          <button
            className="w-full sm:w-auto bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition"
            onClick={() => navigate("/admin/manage-bookings")}
          >
            Manage Bookings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
