// import React, { useState } from "react";
// import { useNavigate,useLocation } from "react-router-dom";
// import ApiService from "../../service/ApiService";

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation();

//   const from = location.state?.from?.pathname || '/home';


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email || !password) {
//             setError('Please fill in all fields.');
//             setTimeout(() => setError(''), 5000);
//             return;
//         }

//         try {
//             const response = await ApiService.loginUser({email, password});
//             if (response.statusCode === 200) {
//                 localStorage.setItem('token', response.token);
//                 localStorage.setItem('role', response.role);
//                 navigate(from, { replace: true });
//             }
//         } catch (error) {
//             setError(error.response?.data?.message || error.message);
//             setTimeout(() => setError(''), 5000);
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>Login</h2>
//             {error && <p className="error-message">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Email: </label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password: </label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
                
                
                
//                 <button type="submit">Login</button>
//             </form>

//             <p className="register-link">
//                 Don't have an account? 
//                 <a href="/register">Register</a>
//             </p>
//         </div>
//     );
// }

// export default LoginPage;




import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApiService from "../../service/ApiService";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            setTimeout(() => setError(''), 5000);
            return;
        }

        try {
            const response = await ApiService.loginUser({ email, password });
            if (response.statusCode === 200) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('role', response.role);
                navigate(from, { replace: true });
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-blue-100 to-blue-300 px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Login</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2  border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-600 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
