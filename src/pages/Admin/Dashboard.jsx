import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = ({ products, deleteProduct }) => {

    const onHandleRemove = (id) => {
        deleteProduct(id)
    }

    return (
        <div className="w-[1240px] mx-auto " >
        <h1 className="text-[24px] font-bold mx-[20px] "><Link to={`/`}>Trang Chủ </Link> / Dashboard  </h1>
        <div className='ml-[12px] my-[20px]'>
        <Link to={`/admin/product/add`}><button className="text-[16px] font-medium border w-[150px] rounded-[5px] bg-[#d1d5db] " >Add New Product</button></Link>
        <Link to={`/admin/category`}><button  className="text-[16px] font-medium border w-[150px] rounded-[5px] bg-[#d1d5db] ml-[32px]" >Category</button></Link>
        <Link to={`/admin/user`}><button  className="text-[16px] font-medium border w-[150px] rounded-[5px] bg-[#d1d5db] ml-[32px]" >User</button></Link>
        </div>
         
            <table>
            
                <thead>
                    <tr>
                        <th className='w-[50px] border'>#</th>
                        <th className='w-[200px] border'>Product Price</th>
                        <th className='w-[200px] border'>image</th>
                        <th className='w-[200px] border'>description</th>
                        <th className='w-[200px] border'>categoryId</th>
                        <th className='w-[200px] border'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index + 1} className='my-[25px] border h-[80px]'>
                                <td className=' text-center border'>{index + 1}</td>
                                <td className=' text-center border'>{item.name}</td>
                                <td className=' text-center border'> {item.price}</td>
                                <td className=' text-center border'> <img src={item.image} /></td>
                                <td className=' text-center border'>{item.description}</td>
                                <td className=' text-center border'>{item.categoryId}</td>
                                <td className=' text-center border'>
                                    <button className="text-[16px]  border w-[80px] rounded-[5px] bg-[#d1d5db]" onClick={() => onHandleRemove(item.id)}>Delete</button>
                                    <Link to={`/admin/product/update/${item.id}`}><button className="text-[16px]  border w-[80px] rounded-[5px] bg-[#d1d5db]"> Update </button> </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard