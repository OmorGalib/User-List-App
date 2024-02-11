import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    company: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, avatar: reader.result });
    };
  };

  const handleSubmit = event => {
    event.preventDefault();
    addUser(formData);
    setFormData({
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      company: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-row m-auto p-2">
            <p class="font-medium pr-2 text-white">Avatar : </p>
            <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleAvatarChange}
                className="rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
            />
            {formData.avatar && <img src={formData.avatar} alt="Avatar Preview" />}
        </div>
        <div class="flex flex-row m-auto p-2">
            <p class="font-medium pr-2 text-white">Name : </p>
            <div class="flex flex-col m-auto p-1">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
                />
            </div>
        </div>
        <div class="flex flex-row m-auto p-2">
            <p class="font-medium pr-2 text-white">Email : </p>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
            />
        </div>
        <div class="flex flex-row m-auto p-2">
            <p class="font-medium pr-2 text-white">Address : </p>
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
            />
        </div>
        <div class="flex flex-row m-auto p-2">
            <p class="font-medium pr-2 text-white">Company : </p>
            <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
            />
        </div>
        <button type="submit" className="m-5 w-1/3 bg-gradient-to-br from-pink-400 via-purple-300 to-pink-400 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded"
        >Add User</button>
      </div>
    </form>
  );
};

export default UserForm;