import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  if (!user) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div class="min-h-screen  mx-auto p-4 bg-gradient-to-br from-black via-blue-800 to-black flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-rose-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-4">
        <img src={user.image} alt="Image" className="w-1/3 mb-2 rounded-lg" />
        <h2 className="text-lg font-semibold text-slate-50">{user.firstName} {user.lastName}</h2>
        <p className="text-slate-50">{user.email}</p>
        <p className="text-slate-50">Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
        <p className="text-slate-50">Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;