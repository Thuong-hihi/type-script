import React from 'react';
import { Link } from 'react-router-dom';

const ListCategory = ({ category, deleteCategory }) => {
  // console.log(category);
  const onHandleRemove = (id) => {
    deleteCategory(id);

}
  return (
    
    <div>
      
       <Link to= {`/admin/category/add`}><button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[200px]' >Add New Category</button></Link> 
    
      <table>
        <thead>
          <tr>
            <th className='w-[50px] border'>#</th>
            <th className='w-[150px] border'>Category Name</th>
            <th className='w-[200px] border'>Action</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((item, index) => {
            return (
              <tr key={index + 1}  className='my-[25px] border h-[50px]'>
                <td className=' text-center border'>{index + 1}</td>
                <td className=' text-center border'>{item.name}</td>

                <td>
                  <button  className='px-2 py-1 border mx-2 bg-slate-400  hover:text-white ' onClick={() => onHandleRemove(item.id)}>Delete</button>
                  <Link to={`/admin/category/update/${item.id}`}>
                    <button className='px-2 py-1 border mx-2 bg-slate-400  hover:text-white '>Edit </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
