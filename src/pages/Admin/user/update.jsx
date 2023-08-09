import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateUserPage = ({updateUser ,userToUpdate ,user})=>{
    const{id} = useParams();
    const currentUser = user.find(user => user.id == id);
    const navigate = useNavigate();

    const[inputValues ,setInputValues] = useState();
    const onHandleChange = (event) =>{
        const {name ,value} = event.target;
        setInputValues((prevValues) =>({
            ...prevValues,
            [name]:value,
        }));
    };
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        updateUser({...inputValues ,"id":id});
        navigate("/admin/user");
    };
    return(
        <div>
            <h2 className='text-[24px] font-bold mx-[20px] text-center my-[20px]'>Update User</h2>
            <Link to="/admin/user">List user</Link>
            <form action="" onSubmit={onHandleSubmit} >
            <label className="block text-sm font-medium text-gray-700 mr-[360px]">Name:</label>
                <input className='border rounded-[5px]  my-[10px] w-[400px]'
                 
                 type="text"
                 name="name"
                 placeholder="Enter Product Name"
                 defaultValue={currentUser?.name}
                 // value={inputValues.name}
                 onChange={onHandleChange}
               />
              <label className="block text-sm font-medium text-gray-700 mr-[370px]">Email:</label>
            <input className='border rounded-[5px]  my-[10px] w-[400px]'
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    defaultValue={currentUser?.name}
                    onChange={onHandleChange}
                />
                 < label className="block text-sm font-medium text-gray-700 mr-[370px]">RoleId:</label>
                <input  className='border rounded-[5px]  my-[10px] w-[400px]'
                    type="number"
                    name="roleId"
                    placeholder="Enter Password"
                    value={user.roleId}
                    defaultValue={currentUser?.name}
                    onChange={onHandleChange}
                />
               < label className="block text-sm font-medium text-gray-700 mr-[330px]">Password:</label>
                <input  className='border rounded-[5px]  my-[10px] w-[400px]'
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    defaultValue={currentUser?.name}
                    onChange={onHandleChange}
                />
                <div className='mt-[50px]'>
                <button  className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]'  type="submit">Update</button>
                </div>
            </form>
        </div>
    );

};
export default UpdateUserPage


