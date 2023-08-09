import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Joi from 'joi';

const UpdateProductPage = ({ updateProduct, productToUpdate, products }) => {
  const { id } = useParams(); // Nhận id của sản phẩm từ URL
  const currentProduct = products.find(product => product.id == id);
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const schema = Joi.object({
      name: Joi.string().trim().required().label("Tên sản phẩm"),
      image: Joi.string().uri().required().label("Hình ảnh sản phẩm"),
      price: Joi.number().min(0).required().label("Giá sản phẩm").positive().precision(2),
      description: Joi.string().required().label("Mô tả sản phẩm"),
      categoryId: Joi.number().min(1).required().label("Mã danh mục sản phẩm")
  });
  const [inputValues, setInputValues] = useState({
    name: currentProduct?.name || '',
    image: currentProduct?.image || '',
    price: currentProduct?.price || '',
    description: currentProduct?.description || '',
    categoryId: currentProduct?.categoryId || ''
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

    updateProduct({ ...inputValues, "id": id }); // Gọi hàm updateProduct và truyền dữ liệu đã cập nhật
    navigate("/admin");
  };

  return (
    <div>
      <h2 className='text-[24px] font-bold mx-[20px] text-center my-[20px]'>Update Product</h2>
      <Link to="/admin">List Product</Link>
      <form action="" onSubmit={onHandleSubmit}>
      
        <input 
         className={`border rounded-[5px] w-full my-[10px] ${errors.name &&'border-red-400' }`}
          type="text"
          name="name"
          placeholder="Enter Product Name"
          defaultValue={currentProduct?.name}
          // value={inputValues.name}
          onChange={onHandleChange}
        />
        {errors.name && <p className='text-red-500 text-sm">{errors.name}'>{errors.name}</p>}


        <input  
        className={`border rounded-[5px] w-full my-[10px] ${errors.image &&'border-red-400' }`}
          type="text"
          name="image"
          placeholder="Enter Product Image"
          defaultValue={currentProduct?.image}

          // value={inputValues.price}
          onChange={onHandleChange}
        />
        {errors.image && <p className='text-red-500 text-sm">{errors.name}'>{errors.image}</p>}


          <input  
          className={`border rounded-[5px] w-full my-[10px] ${errors.price &&'border-red-400' }`}
          type="number"
          name="price"
          placeholder="Enter Product Price"
          defaultValue={currentProduct?.price}

          // value={inputValues.price}
          onChange={onHandleChange}
        />
        {errors.price && <p className='text-red-500 text-sm">{errors.name}'>{errors.price}</p>}
          <input
          type="text"  className='border rounded-[5px] w-full my-[10px]' 
          name="description"
          placeholder="Enter Product Description "
          defaultValue={currentProduct?.description}

          // value={inputValues.price}
          onChange={onHandleChange}
        />
        {errors.description && <p className='text-red-500 text-sm">{errors.name}'>{errors.description}</p>}
          <input
          type="number" 
          className={`border rounded-[5px] w-full my-[10px] ${errors.categoryId &&'border-red-400' }`}
          name="categoryId"
          placeholder="Enter Product CategoryId"
          defaultValue={currentProduct?.categoryId}

          // value={inputValues.price}
          onChange={onHandleChange}
        />
        {errors.categoryId && <p className='text-red-500 text-sm">{errors.name}'>{errors.categoryId}</p>}
        <button className="text-[16px]  border w-[80px] rounded-[5px] bg-[#d1d5db]" type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
