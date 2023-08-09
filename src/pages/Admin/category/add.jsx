import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

const AddCategoryPage = ({ addCategory }) => {
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: '',
    });

    const [errors, setErrors] = useState({});
    const schema = Joi.object({
        name: Joi.string().trim().required().label("Tên danh mục"),
    });

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { error } = schema.validate(category, { abortEarly: false });
        if (!error) return null;

        const validationErrors = {};
        for (let item of error.details) {
            validationErrors[item.path[0]] = item.message;
        }
        return validationErrors;
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        addCategory(category);
        navigate("/admin/category");
    };

    return (
        <div>
            <h2 className='text-[24px] font-bold mx-[20px] text-center my-[20px]'>Thêm danh mục</h2>
            <form onSubmit={onHandleSubmit} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
                <label className="block text-sm font-medium text-gray-700 mr-[300px]">Tên danh mục:</label>
                <input className={`border rounded-[5px] my-[10px] w-[400px] ${errors.name && 'border-red-500'}`}
                    type="text"
                    name="name"
                    placeholder="Nhập tên danh mục"
                    value={category.name}
                    onChange={onHandleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]' type="submit">Thêm</button>
            </form>
        </div>
    );
};

export default AddCategoryPage;
