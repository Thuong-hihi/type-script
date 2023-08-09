import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Joi from 'joi';

const UpdateCategoryPage = ({ updateCategory, categoryToUpdate, category }) => {
    const { id } = useParams();
    const currentCategory = category.find(category => category.id == id);
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        name: currentCategory?.name || '',
    });

    const [errors, setErrors] = useState({});
    const schema = Joi.object({
        name: Joi.string().trim().required().label("Tên danh mục"),
    });

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { error } = schema.validate(inputValues, { abortEarly: false });
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

        updateCategory({ ...inputValues, "id": id });
        navigate("/admin/category");
    };

    return (
        <div>
            <h2 className='text-[24px] font-bold mx-[20px] text-center my-[20px]'>Cập nhật danh mục</h2>
            <Link to="/admin/category">Danh sách danh mục</Link>
            <form onSubmit={onHandleSubmit} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
                <label className="block text-sm font-medium text-gray-700 mr-[410px]">Tên danh mục:</label>
                <input className={`border rounded-[5px] my-[10px] w-[400px] ${errors.name && 'border-red-500'}`}
                    type="text"
                    name="name"
                    placeholder="Nhập tên danh mục"
                    value={inputValues.name}
                    onChange={onHandleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]' type="submit">Cập nhật</button>
            </form>
        </div>
    );
};

export default UpdateCategoryPage;
