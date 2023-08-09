import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ products }) => {
  console.log("Home page: ", products);
  return (
    <div className="w-1200px ">
      <div className="flex ">
        <nav>
          <ul className="flex ml-[200px]">
            <li><a href="" className="text-[22px] font-medium mx-[16px]">Home Page</a></li>
            <li><a href="" className="text-[22px] font-medium mx-[16px]">product</a></li>
            <li><a href="" className="text-[22px] font-medium mx-[16px]">giá cao </a></li>
            <li><a href="" className="text-[22px] font-medium mx-[16px]"> mô tả</a></li>
          </ul>
        </nav>

        <div className="ml-[250px]">
          <Link to={`/signin`}>
            <button className="w-[120px] inline-block rounded border border-indigo-600 bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mr-[32px]">Đăng Nhập</button>
          </Link>
          <Link to={`/signup`}>
            <button className="w-[120px] inline-block rounded border border-indigo-600 bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mr-[32px]">Đăng Ký</button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-[60px] mx-[30px] gap-10 w-full">
      {products.map((item, index) => {
        return (
   <Link to={`/detail/${item.id}`}>
     <div key={index + 1}>
            <h3  className="ml-[-90px] text-xl font-medium">{item.name}</h3>
            <p className="ml-[-90px] text-[red] my-[10px]">{item.price} đ</p>
            <p>
              <img src={item.image} alt="Product" />
            </p>
            <p className="ml-[-90px] text-[16px] font-normal my-[10px]">{item.description}</p>
            <p className="ml-[-90px] text-[16px] font-normal">{item.categoryId}</p>

          </div>
 </Link>
       
        );
      })}
      </div>
    </div>
  )
};

export default HomePage;
