import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setUsers([]); // Set users to an empty array in case of error
      });
  }, []);

  // Function to filter users based on search term
  const filteredUsers = Array.isArray(users) ? users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  // Function to sort users based on selected option
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortBy === 'name') {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === 'email') {
      return a.email.localeCompare(b.email);
    } else if (sortBy === 'company') {
      return a.company.name.localeCompare(b.company.name);
    } else {
      return 0;
    }
  });

  //functions to add users
  const handleAddUser = newUser => {
    console.log('New User:', newUser);
    setUsers([...users, newUser]);
    setShowAddUserForm(false);
  };

  return (
    <div className="min-h-screen  mx-auto p-4 bg-gradient-to-br from-black via-blue-800 to-black">
        <div>
            <h1 className="italic hover:not-italic font-bold text-center p-4 text-6xl mb-5 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">User List App</h1>
        </div>
      <div className="flex flex-row justify-around">
        {/* Search input field */}
        <div className="w-full">
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-4/5 mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            />
        </div>
        {/* Select input field for sorting */}
        <div className="w-full">
            <select
                onChange={e => setSortBy(e.target.value)}
                className="w-4/5 mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            >
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="company">Company</option>
            </select>
        </div>
        {/*User Form for Add User*/}
        <div className="w-full">
          <button
            className="w-4/5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAddUserForm(!showAddUserForm)}
          >
            {showAddUserForm ? 'Cancel' : 'Add User'}
          </button>
        </div>
      </div>

      {showAddUserForm && <UserForm addUser={handleAddUser} />}
      {/* User cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {sortedUsers.map(user => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;