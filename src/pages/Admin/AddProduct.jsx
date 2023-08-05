import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddProductPage = ({ addProduct }) => {
    const [inputValues, setInputValues] = useState({
        name: '',
        price: '',
    });

    const navigate = useNavigate();
    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();
       await addProduct(inputValues);
        // Reset form fields after submission (optional)
        setInputValues({    
            name: '',
            price: '',
        });
       
        navigate("/admin")
    };

    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    value={inputValues.name}
                    onChange={onHandleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Enter Product Price"
                    value={inputValues.price}
                    onChange={onHandleChange}
                />
                <button type="submit" >Add New</button>
            </form>
        </div>
    );
};

export default AddProductPage;