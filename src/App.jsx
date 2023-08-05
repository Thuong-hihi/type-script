import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/Detail';
import Dashboard from './pages/Admin/Dashboard';
import AddProductPage from './pages/Admin/AddProduct';
import UpdateProductPage from './pages/Admin/UpdateProduc';

/*
  B1: Cài đặt thư viện react-router-dom
  B2: wrap toàn bộ ứng dụng bằng component <BrowserRouter>
  B3: Tạo các route bằng component <Route>
  B4: wrap toàn bộ router bằng component <Routes>
*/

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    }).then(() => setProducts(products.filter((item) => item.id != id)))
  }

  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
     
      body: JSON.stringify(product)
    
    })
    .then(() =>{
      window.location.reload() ;
      alert("Thêm sản phẩm thành công")
    })
  }
  const updateProduct = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    .then(() => {
      window.location.reload();
      alert("Cập nhật sản phẩm thành công");
    })
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />

        <Route path='/admin' element={<Dashboard products={products} deleteProduct={deleteProduct} />} />
        <Route path='/admin/product/add' element={<AddProductPage addProduct={addProduct} />} />
        <Route path='/admin/product/update' element={<UpdateProductPage updateProduct={updateProduct} />} />
      </Routes>

    </>
  );
}

export default App;
