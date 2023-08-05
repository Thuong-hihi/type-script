import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProductPage = ({ updateProduct, productToUpdate }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (productToUpdate) {
      // Nếu có productToUpdate được truyền vào props, chúng ta sẽ sử dụng nó để điền vào các trường nhập liệu khi trong chế độ cập nhật.
      setInputValues(productToUpdate);
    }
  }, [productToUpdate]);

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(inputValues);
    // Reset form fields after submission (optional)
    setInputValues({
      name: '',
      price: '',
    });
    navigate("/admin");
  };

  return (
    <div>
      <h2>Update Product</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
