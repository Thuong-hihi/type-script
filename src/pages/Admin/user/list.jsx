import React from 'react';
import { Link } from 'react-router-dom';

const ListUser = ({user,deleteUser}) =>{
    const onHandleRemove = (id) =>{
        deleteUser(id);
    }
    return(
        <div>
            <Link  to={`/admin/user/add`}> <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[140px] mb-[50px]' >Add New User</button></Link>
            <table>
                <thead>
                    <tr>
                        <th className='w-[50px] border'>#</th>
                        <th className='w-[200px] border'> User Name</th>
                        <th className='w-[200px] border'>User Email</th>
                        <th className='w-[200px] border'>User roleId</th>
                        <th className='w-[200px] border'>User Password</th>
                       
                        <th className='w-[200px] border'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((item ,index) =>{
                        return(
                            <tr key={index +1}  className='my-[25px] border h-[80px]'>
                                <td className=' text-center border'>{index +1}</td> 
                                <td className=' text-center border'>{item.name}</td>
                                <td className=' text-center border'> {item.email}</td>
                                <td className=' text-center border'> {item.roleId}</td>
                                <td className=' text-center border'>{item.password}</td>
                                <td>
                  <button  className='px-2 py-1 border mx-2 bg-slate-400  hover:text-white ' onClick={() => onHandleRemove(item.id)}>Delete</button>
                  <Link to={`/admin/user/update/${item.id}`}>
                    <button  className='px-2 py-1 border mx-2 bg-slate-400  hover:text-white '>Edit </button>
                  </Link>
                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListUser