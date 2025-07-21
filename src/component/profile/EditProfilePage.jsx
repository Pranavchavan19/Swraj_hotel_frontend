// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApiService from '../../service/ApiService';

// const EditProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await ApiService.getUserProfile();
//                 setUser(response.user);
//             } catch (error) {
//                 setError(error.message);
//             }
//         };

//         fetchUserProfile();
//     }, []);

//     const handleDeleteProfile = async () => {
//         if (!window.confirm('Are you sure you want to delete your account?')) {
//             return;
//         }
//         try {
//             await ApiService.deleteUser(user.id);
//             navigate('/signup');
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className="edit-profile-page">
//             <h2>Edit Profile</h2>
//             {error && <p className="error-message">{error}</p>}
//             {user && (
//                 <div className="profile-details">
//                     <p><strong>Name:</strong> {user.name}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
//                     <button className="delete-profile-button" onClick={handleDeleteProfile}>Delete Profile</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default EditProfilePage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const EditProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await ApiService.getUserProfile();
        setUser(response.user);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserProfile();
  }, []);

  const handleDeleteProfile = async () => {
    if (!window.confirm('Are you sure you want to delete your account?')) return;

    try {
      await ApiService.deleteUser(user.id);
      navigate('/signup');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-300 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Edit Profile</h2>
        
        {error && (
          <p className="text-red-600 text-center text-sm">{error}</p>
        )}

        {user ? (
          <div className="space-y-4">
            <div>
              <p className="text-gray-600"><span className="font-semibold">Name:</span> {user.name}</p>
              <p className="text-gray-600"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-gray-600"><span className="font-semibold">Phone:</span> {user.phoneNumber}</p>
            </div>
            <button
              onClick={handleDeleteProfile}
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
            >
              Delete Profile
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default EditProfilePage;
