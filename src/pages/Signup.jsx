import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Gửi thông tin đăng ký lên máy chủ (hoặc cơ sở dữ liệu giả lập)
      // Trong ví dụ này, chúng ta giả sử thông tin đăng ký hợp lệ và chưa kiểm tra email trùng lặp
      const newUser = {
        name: name,
        email: email,
        password: password,
      };

      // Gửi thông tin đăng ký lên máy chủ (API) để xử lý và lưu vào db.json
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setError('');
        // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
        alert("Đăng kí tài khoản thành coong ^^ Vui lòng đăng nhập ");
        window.location.replace('/signin');
      } else {
        setError('Đăng ký không thành công. Vui lòng thử lại sau.');
      }
    } catch (error) {
      setError('Đăng ký không thành công. Vui lòng thử lại sau.');
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold sm:text-3xl'>Đăng Ký</h2>
      <form onSubmit={handleSubmit} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
        <div>
          <label className="block text-sm font-medium text-gray-700 mr-[400px]">Tên:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' type="text" value={name} id="name" name="name"  placeholder="Enter name"onChange={handleNameChange} />
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700 mr-[400px]">Email:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'  type="email" value={email}  id="email" name="email"  placeholder="Enter email" onChange={handleEmailChange} />
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700 mr-[370px]">Mật khẩu:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' type="password" value={password}   id="password" name="password" placeholder="Enter password" onChange={handlePasswordChange} />
        </div>
        <div className=''>
          <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]' type="submit">Đăng ký</button>
        </div>
      </form>
      <p>Bạn đã có tài khoản. Đăng nhập <Link to={"/signin"}>tại đây</Link></p>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;
