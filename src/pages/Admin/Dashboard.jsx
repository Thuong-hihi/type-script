import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = ({ products, deleteProduct }) => {

    const onHandleRemove = (id) => {
        deleteProduct(id)
    }

    return (
        <div>
            <Link to={`/admin/product/add`}><button>Add New Product</button></Link>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={item.image} alt="Product" />
                                </td>
                                <td>
                                    <button onClick={() => onHandleRemove(item.id)}>Delete</button>
                                    <Link to={`/admin/product/update`}>Update product</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard