import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Joi from 'joi'; // Import thư viện joi để xác thực dữ liệu

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

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
      const schema = Joi.object({
        name: Joi.string().min(5).trim().required().messages({
          'string.min': 'Tên phải có ít nhất {#limit} ký tự',
          'any.required': 'Tên là trường bắt buộc',
        }),
        email: Joi.string().email().required().messages({
          'string.email': 'Email không hợp lệ',
          'any.required': 'Email là trường bắt buộc',
        }),
        password: Joi.string().min(6).required().messages({
          'string.min': 'Mật khẩu phải có ít nhất {#limit} ký tự',
          'any.required': 'Mật khẩu là trường bắt buộc',
        }),
      });

      const userData = { name, email, password };
      const { error } = schema.validate(userData, { abortEarly: false });

      if (error) {
        const validationErrors = {};
        error.details.forEach((detail) => {
          validationErrors[detail.context.key] = detail.message;
        });
        setValidationErrors(validationErrors);
        return;
      }

      // Gửi thông tin đăng ký lên máy chủ...
    } catch (error) {
      setError('Đăng ký không thành công. Vui lòng thử lại sau.');
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold sm:text-3xl'>Đăng ký</h2>
      <form onSubmit={handleSubmit} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
        <div>
          <label className="block text-sm font-medium text-gray-700 mr-[400px]">Tên:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' type="text" value={name} id="name" name="name" placeholder="Enter name" onChange={handleNameChange} />
          {validationErrors.name && <p className="text-red-500 text-sm">{validationErrors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mr-[400px]">Email:</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' type="email" value={email} id="email" name="email" placeholder