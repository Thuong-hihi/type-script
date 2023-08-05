import React, { useState } from 'react'

const HomePage = ({ data }) => {
    const [products, setProducts] = useState(data)
    console.log(products);
    const addProduct = (product) => {
        setProducts([...products, product])
    }

    const deleteProduct = (id) => {
        const newData = products.filter((product) => product.id != id)
        // console.log("New data:", newData);
        setProducts(newData)
    }

    const updateProduct = (id) => {
        const newData = products.map((product) => product.id == id ? { id: 1, name: "product update", price: 1000 } : product)
        // console.log("Old data:", products);
        // console.log("New data: ", newData);
        setProducts(newData)
    }
    return (
        <div>
            <button onClick={() => addProduct({ id: 4, name: "Product 4", price: 400 })}>Add New Product</button>
            {products.map((product, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        <button onClick={() => updateProduct(product.id)}>Update</button>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage