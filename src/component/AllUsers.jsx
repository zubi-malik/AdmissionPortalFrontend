import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllUsers() {
  const [allUsersLength, setAllUsersLength] = useState(null);

  useEffect(() => {
    axios
      .get("https://smit-backend.onrender.com/api/all-users-length")
      .then((res) => {
        console.log(res.data.allUsers);
        setAllUsersLength(res.data.allUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 text-center mb-6">
        Admin Panel
      </h1>
      <div className="flex items-center justify-center w-full md:w-2/3 lg:w-1/3 p-6 md:p-10 lg:p-14 bg-blue-500 rounded shadow-md">
        {allUsersLength !== null ? (
          <Link
            to="/admin"
            className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center"
          >
            Total Users: {allUsersLength}
          </Link>
        ) : (
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}
