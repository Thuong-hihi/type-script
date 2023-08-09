import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const xuLyThayDoiTen = (e) => {
    setName(e.target.value);
  };

  const xuLyThayDoiMatKhau = (e) => {
    setPassword(e.target.value);
  };

  const xuLyGui = async (e) => {
    e.preventDefault();
  
    try {
      // Lấy dữ liệu người dùng từ db.json bằng cách sử dụng axios
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;
  
      // Kiểm tra xem người dùng có tồn tại trong danh sách người dùng không
      const user = users.find(
        (user) => user.name === name && user.password === password
      );
  
      if (user) {
        setError("");
  
        // Lưu trạng thái đăng nhập (ví dụ: sử dụng localStorage)
        localStorage.setItem("isLoggedIn", true);
  
        // Xác định chuyển hướng dựa trên vai trò của người dùng
        if (user.roleId === 1) {
          alert("Đăng nhập thành công với tư cách quản trị viên!");
          navigate('/admin');
        } else {
          alert("Đăng nhập thành công!");
          navigate('/');
        }
      } else {
        setError("Tên hoặc mật khẩu không hợp lệ");
        localStorage.removeItem("isLoggedIn");
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi truy vấn dữ liệu");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl">Đăng Nhập</h2>
      <form onSubmit={xuLyGui} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mr-[400px]">Tên:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' type="name" value={name} placeholder="Nhập tên" onChange={xuLyThayDoiTen} />
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700 mr-[380px]">Mật Khẩu:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
            type="password"
            name="password"
            value={password}
            placeholder="Nhập mật khẩu"
            onChange={xuLyThayDoiMatKhau}
          />
        </div>
        <div className="">
          <button className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]" type="submit">Đăng Nhập</button>
        </div>
      </form>
      <p>Bạn chưa có tài khoản. Đăng kí <Link to={"/signup"}>tại đây</Link></p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signin;
