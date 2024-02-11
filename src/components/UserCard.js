import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-gradient-to-br from-purple-400  via-pink-400 to-blue-400 rounded-lg shadow-md p-4">
      <img src={user.image} alt="Image" className="w-full mb-2 rounded-lg" />
      <h2 className="text-lg font-semibold text-slate-50">{user.firstName} {user.lastName}</h2>
      <p className="text-stone-700">{user.email}</p>
      <p className="text-slate-50">Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
      <p className="text-slate-50">Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;