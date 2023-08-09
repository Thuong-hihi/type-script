import React from 'react'
import { useParams } from 'react-router-dom';

const DetailPage = ({ products }) => {
    const { id } = useParams();
    const currentProduct = products.find((item) => item.id === Number(id))
    // console.log(currentProduct);
    return (
        <div>
            <h3 className=" text-xl font-medium">{currentProduct?.name}</h3>
            <img className='mx-auto' src={currentProduct?.image} alt="Product Image" />
            <p className=" text-[red] my-[10px]">{currentProduct?.price}</p>
            <p className=" text-[16px] font-normal my-[10px]">{currentProduct?.description}</p>
            <p>{currentProduct?.categoryId}</p>
        </div>
    )
}

export default DetailPage