import axios from "axios";
import React, { useEffect, useState } from "react";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[120px] border-l border-transparent py-3 px-2 text-sm md:text-base lg:text-lg font-medium text-white lg:py-5 lg:px-3`,
  TdStyle1: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-3 px-2 text-center text-sm md:text-base lg:text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-3 px-2 text-center text-sm md:text-base lg:text-base font-medium`,
};

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://smit-backend.onrender.com/api/all-users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-dark py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="overflow-x-auto">
              <h1 className="text-blue-500 text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 lg:mb-8 font-bold text-center">
                Admin DashBoard
              </h1>
              <table className="min-w-full table-auto">
                <thead className="text-center bg-primary">
                  <tr>
                    <th className={TdStyle.ThStyle}>Full Name</th>
                    <th className={TdStyle.ThStyle}>Father Name</th>
                    <th className={TdStyle.ThStyle}>Email</th>
                    <th className={TdStyle.ThStyle}>CNIC</th>
                    <th className={TdStyle.ThStyle}>Gender</th>
                    <th className={TdStyle.ThStyle}>Register</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className={TdStyle.TdStyle2}>{user.fullName}</td>
                      <td className={TdStyle.TdStyle2}>{user.fatherName}</td>
                      <td className={TdStyle.TdStyle2}>{user.email}</td>
                      <td className={TdStyle.TdStyle2}>{user.cnic}</td>
                      <td className={TdStyle.TdStyle2}>{user.gender}</td>
                      <td className={TdStyle.TdStyle2}>{user.selectCourse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
