import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/Detail";
import Dashboard from "./pages/Admin/Dashboard";
import AddProductPage from "./pages/Admin/AddProduct";
import UpdateProductPage from "./pages/Admin/UpdateProduc";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import { AddCategoryPage, ListCategory,UpdateCategoryPage } from "./pages/Admin/category";
import { ListUser ,AddUserPage,UpdateUserPage} from "./pages/Admin/user";
import axios from "axios";
// import { it } from 'node:test';
/*
  B1: Cài đặt thư viện react-router-dom
  B2: wrap toàn bộ ứng dụng bằng component <BrowserRouter>
  B3: Tạo các route bằng component <Route>
  B4: wrap toàn bộ router bằng component <Routes>
*/

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const [category, setCategory] = useState([]);
  const [user ,setUser] = useState([]);
// user


useEffect(() =>{
  axios
  .get("http://localhost:3000/users")
  .then(({data}) => setUser(data));
},[])

const deleteUser = (id) =>{
  const confirm = window.confirm("Bạn có chắc chắn muốn xóa trường này?");
  if(confirm){
    fetch(`http://localhost:3000/users/${id}`,{
      method:"DELETE",
    })
    .then(() => setUser(user.filter((item) => item.id)))
    .then(() => alert("Xóa thành công sản phẩm ^^"));
    window.location.reload();
  }
}

const addUser = (user) =>{
  axios.post('http://localhost:3000/users',user).then(() =>{

  }).then(() =>{
    alert('Thêm tài khoản thành công ^^')
  }).then(() =>{
    axios
    .get("http://localhost:3000/users")
    .then(({data}) => setUser(data));
  });
}

const updateUser = (user) =>{

  fetch(`http://localhost:3000/users/${user.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(user),
    }).then(() =>{
      window.location.reload();
      alert("Cập nhật tài khoản thành công");
    });
  }


  //category
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then(({ data }) => setCategory(data));
  }, []);


  const updateCategory = (category) =>{
    fetch(`http://localhost:3000/categories/${category.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(category),
    }).then(() =>{
      window.location.reload();
      alert("Cập nhật danh mục thành công");
    });
 }
  const deleteCategory = (id) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa trường này?");
    if (confirm) {
      fetch(`http://localhost:3000/categories/${id}`, {
        method: "DELETE",
      })
        .then(() => setCategory(category.filter((item) => item.id)))
        .then(() => alert("Xóa thành công sản phẩm ^^"));
      window.location.reload();
    }
  };

  const addCategory = (category) => {
    // console.log(category);
    axios.post('http://localhost:3000/categories', category).then(() => {
      alert('Thêm danh mục thành công ^^')
    }).then(() => {
      axios
      .get("http://localhost:3000/categories")
      .then(({ data }) => setCategory(data));
    })
    // fetch(`http://localhost:3000/categories`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(category),
    // }).then(() => {
    //   // window.location.reload() ;
    //   fetch("http://localhost:3000/categories")
    //     .then((response) => response.json())
    //     .then((data) => setCategory(data))
    //     .then(() => alert("Thêm danh mục thành công"));
    // });
  };






 const deleteProduct = (id) => {
  const confirm = window.confirm("Bạn có chắc muốn xóa trường này?");
  if (confirm) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => setProducts(products.filter((item) => item.id != id)))
      .then(() => alert("Xóa thành công sản phẩm ^^"));
    window.location.reload();
  }
};
  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(() => {
      // window.location.reload() ;
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => alert("Thêm sản phẩm thành công"));
    });
  };

  const updateProduct = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(() => {
      window.location.reload();
      alert("Cập nhật sản phẩm thành công");
    });
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/detail/:id"
          element={<DetailPage products={products} />}
        />

        <Route
          path="/admin"
          element={
            <Dashboard products={products} deleteProduct={deleteProduct} />
          }
        />
        <Route
          path="/admin/product/add"
          element={<AddProductPage addProduct={addProduct} />}
        />
        <Route
          path="/admin/product/update/:id"
          element={
            <UpdateProductPage
              products={products}
              updateProduct={updateProduct}
            />
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin/category"
          element={
            <ListCategory category={category} deleteCategory={deleteCategory} />
          }
        />
        <Route
          path="/admin/category/add"
          element={<AddCategoryPage addCategory={addCategory} />}
        />
         <Route
          path="/admin/category/update/:id"
          element={
            <UpdateCategoryPage
              category={category}
              updateCategory={updateCategory}
            />
          }
        />
        <Route
          path="/admin/product/add"
          element={<AddProductPage addProduct={addProduct} />}
        />


        <Route
          path="/admin/user"
          element={
            <ListUser user={user} deleteUser={deleteUser} />
          }
        />

      <Route
          path="/admin/user/add"
          element={<AddUserPage addUser={addUser} />}
        />
       
         <Route
          path="/admin/user/update/:id"
          element={
            <UpdateUserPage
              user={user}
              updateUser={updateUser}
            />
          }
        />
       
      </Routes>
    </>
  );
}

export default App;
