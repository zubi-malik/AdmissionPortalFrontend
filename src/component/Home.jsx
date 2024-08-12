import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-blue-500  m-8 text-4xl font-bold">
      <Link to="/allUsers" className="hover:bg-gray-400">
        Admin
      </Link>
    </div>
  );
}
