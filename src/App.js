import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct";
import User from "./pages/user/User"
import UserList from "./pages/userList/UserList";
import "./app.css";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
 

function App() {
  return (
    <Router className="App">
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <Routes>
    <Route exact path="/"
    element={<Home/>} />
    <Route path="/users" 
    element={<UserList/>}/>
    <Route path="/user/:userId"
     element={<User/>}/> 
     <Route path="/newUser"
     element={<NewUser/>}
     />
     <Route path="/product"
      element={<ProductList/>}/>
      <Route path="/product/:productId"
      element={<Product/>}/>
      <Route path="/newProduct"
      element={<NewProduct/>}/>
      </Routes>  
    </div>
    </Router>
  );
}

export default App;
