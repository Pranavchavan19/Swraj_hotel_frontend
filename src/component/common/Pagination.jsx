import React from "react";

const Pagination = ({ roomsPerPage, totalRooms, currentPage, paginate }) => {
  const pageNumbers = [];

  // Fix: Include the last page number using <=
  for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-nav my-4 text-center">
      <ul className="pagination-ul flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-li">
            <button
              onClick={() => paginate(number)}
              className={`pagination-button px-4 py-2 rounded ${
                currentPage === number
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 hover:bg-yellow-400"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
