import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddUserPage = ({ addUser }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onHandleChange = (e) => {
        const { name, value } = e.target; // Đúng chính tả của target
        const newUser = { ...user, [name]: value };
        setUser(newUser);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        addUser(user);
        navigate("/admin/user");
    };

    return (
        <div>
            <h2  className='text-[24px] font-bold mx-[20px] text-center my-[20px]'>Add User</h2>
            <form onSubmit={onHandleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mr-[350px]">Name:</label>
                <input className='border rounded-[5px]  my-[10px] w-[400px]' 
                    type="text"
                    name="name"
                    placeholder="Enter User Name"
                    value={user.name}
                    onChange={onHandleChange}
                />
                 <label className="block text-sm font-medium text-gray-700 mr-[350px]">Email:</label>
                <input className='border rounded-[5px]  my-[10px] w-[400px]' 
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={onHandleChange}
                />
                  <label className="block text-sm font-medium text-gray-700 mr-[350px]">RoleId:</label>
                <input className='border rounded-[5px]  my-[10px] w-[400px]' 
                    type="number"
                    name="roleId"
                    placeholder="Enter roleId"
                    value={user.roleId}
                    onChange={onHandleChange}
                />
                 <label className="block text-sm font-medium text-gray-700 mr-[330px]">Password:</label>
                <input className='border rounded-[5px]  my-[10px] w-[400px]' 
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={onHandleChange}
                />
               
                <div className="mt-[50px]">
                <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]'  type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddUserPage;
