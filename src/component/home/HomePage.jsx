// import React, { useState } from "react";
// import RoomResult from "../common/RoomResult";
// import RoomSearch from "../common/RoomSearch";
// const HomePage = () => {

//     const [roomSearchResults, setRoomSearchResults] = useState([]);

//     // Function to handle search results
//     const handleSearchResult = (results) => {
//         setRoomSearchResults(results);
//     };

//     return (
//         <div className="home">
//             {/* HEADER / BANNER ROOM SECTION */}
//             <section>
//                 <header className="header-banner">
//                     <img src="./assets/images/hotel.webp" alt="Phegon Hotel" className="header-image" />
//                     <div className="overlay"></div>
//                     <div className="animated-texts overlay-content">
//                         <h1>
//                             Welcome to <span className="phegon-color">Swaraj Hotel</span>
//                         </h1><br />
//                         <h3>Step into a haven of comfort and care</h3>
//                     </div>
//                 </header>
//             </section>

//             {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
//             <RoomSearch handleSearchResult={handleSearchResult} />
//             <RoomResult roomSearchResults={roomSearchResults} />

//             <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

//             <h2 className="home-services">Services at <span className="phegon-color">Swaraj Hotel</span></h2>

               
 

//             {/* SERVICES SECTION */}
//             <section className="service-section"><div className="service-card">
//                 <img src="./assets/images/ac.png" alt="Air Conditioning" />
//                 <div className="service-details">
//                     <h3 className="service-title">Air Conditioning</h3>
//                     <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
//                 </div>
//             </div>
//                 <div className="service-card">
//                     <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
//                     <div className="service-details">
//                         <h3 className="service-title">Mini Bar</h3>
//                         <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
//                     </div>
//                 </div>
//                 <div className="service-card">
//                     <img src="./assets/images/parking.png" alt="Parking" />
//                     <div className="service-details">
//                         <h3 className="service-title">Parking</h3>
//                         <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
//                     </div>
//                 </div>
//                 <div className="service-card">
//                     <img src="./assets/images/wifi.png" alt="WiFi" />
//                     <div className="service-details">
//                         <h3 className="service-title">WiFi</h3>
//                         <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
//                     </div>
//                 </div>
//             </section>
//             {/* AVAILABLE ROOMS SECTION */}
//             <section>
//             </section>
//         </div>
//     );
// }

// export default HomePage;









import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
    const [roomSearchResults, setRoomSearchResults] = useState([]);

    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home bg-[#e0f2f1]">

            {/* HEADER / BANNER SECTION */}
            <section>
                <header className="relative w-full h-[300px] md:h-[500px]">
                    <img
                        src="./assets/images/hotel.webp"
                        alt="Swaraj Hotel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Welcome to <span className="text-yellow-400">Swaraj Hotel</span>
                        </h1>
                        <h3 className="text-base sm:text-lg md:text-2xl mt-3">
                            Step into a haven of comfort and care
                        </h3>
                    </div>
                </header>
            </section>

            {/* SEARCH SECTION */}
            <section className="p-4 sm:px-8 md:px-16 lg:px-24 py-6">
                <RoomSearch handleSearchResult={handleSearchResult} />
                <RoomResult roomSearchResults={roomSearchResults} />
            </section>

            {/* ALL ROOMS LINK */}
            <div className="text-center my-6">
                <a
                    href="/rooms"
                    className=" bg-purple-600 px-6 rounded-full py-3 text-[#e0f2f1] hover:bg-yellow-600 underline text-lg transition"
                >
                    View All Rooms
                </a>
            </div>

            {/* SERVICES HEADING */}
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
                Services at <span className="text-yellow-500">Swaraj Hotel</span>
            </h2>

            {/* SERVICES SECTION */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-20 pb-10">
                {[
                    {
                        title: "Air Conditioning",
                        image: "./assets/images/ac.png",
                        desc: "Stay cool and comfortable with individually controlled AC.",
                    },
                    {
                        title: "Mini Bar",
                        image: "./assets/images/mini-bar.png",
                        desc: "Enjoy beverages and snacks stocked in your room.",
                    },
                    {
                        title: "Parking",
                        image: "./assets/images/parking.png",
                        desc: "On-site and valet parking available.",
                    },
                    {
                        title: "WiFi",
                        image: "./assets/images/wifi.png",
                        desc: "Free high-speed Wi-Fi in all areas.",
                    },
                ].map((service, idx) => (
                    <div key={idx} className="bg-white  rounded-3xl p-5 text-center hover:shadow-xl transition">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="mx-auto h-16 mb-4"
                        />
                        <h3 className="text-lg font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default HomePage;
