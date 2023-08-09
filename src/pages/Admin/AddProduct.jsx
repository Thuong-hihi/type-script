import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
const AddProductPage = ({ addProduct }) => {
    const [inputValues, setInputValues] = useState({
        name: '',
        image:'',
        price: '',
        description:'',
        categoryId:''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const schema = Joi.object({
        name: Joi.string().trim().required().label("Product Name"),
        image: Joi.string().uri().required().label("Product Image"),
        price: Joi.number().min(0).required().label("Product Price").positive().precision(2),
        description: Joi.string().required().label("Product Description"),
        categoryId: Joi.number().min(1).required().label("Product CategoryId")
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

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }
       await addProduct(inputValues);
        // Reset form fields after submission (optional)
        setInputValues({    
            name: '',
            image:'',
            price: '',
            description:'',
            categoryId:''
        });
       
        navigate("/admin")
    };

    return (
        <div>
             <h2 className='text-[24px] font-bold mx-[20px] text-center my-[20px]'>Add New Product</h2>
            <form action="" onSubmit={onHandleSubmit} className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
            <label className="block text-sm font-medium text-gray-700 mr-[350px]">Name:</label>
                <input className={`border rounded-[5px]  my-[10px] w-[400px] ${errors.name && 'border-red-500'}`}
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    value={inputValues.name}
                    onChange={onHandleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}


                <label className="block text-sm font-medium text-gray-700 mr-[350px]">Image:</label>
                <input className={`border rounded-[5px]  my-[10px] w-[400px] ${errors.image && 'border-red-500'}`}
                    type="text"
                    name="image"
                    placeholder="Enter Product Image"
                    value={inputValues.image}
                    onChange={onHandleChange}
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
              <label className="block text-sm font-medium text-gray-700 mr-[350px]">Price:</label>
                <input className={`border rounded-[5px]  my-[10px] w-[400px] ${errors.price && 'border-red-500'}`}
                    type="number"
                    name="price"
                    placeholder="Enter Product Price"
                    value={inputValues.price}
                    onChange={onHandleChange}
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

                {/* Repeat similar error display for other fields */}
                <label className="block text-sm font-medium text-gray-700 mr-[330px]">Description:</label>
                <input className={`border rounded-[5px]  my-[10px] w-[400px] ${errors.description && 'border-red-500'}`}
                    type="text"
                    name="description"
                    placeholder="Enter Product Description"
                    value={inputValues.description}
                    onChange={onHandleChange}
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                <label className="block text-sm font-medium text-gray-700 mr-[330px]">CategoryId:</label>
                <input className={`border rounded-[5px]  my-[10px] w-[400px] ${errors.categoryId && 'border-red-500'}`}
                    type="number"
                    name="categoryId"
                    placeholder="Enter Product CategoryId "
                    value={inputValues.categoryId}
                    onChange={onHandleChange}
                />
                {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}
                <button className='inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 w-[120px]' type="submit" >Add New</button>
            </form>
        </div>
    );
};

export default AddProductPage;