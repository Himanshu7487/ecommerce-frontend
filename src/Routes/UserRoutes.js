import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "../component/User/signup";
import { Login } from "../component/User/login";
import { Header } from "../Layout/Header";
import ProductList from "../Product/ProductList";
import Cart from "../component/cart/cart";

const UserRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/cart" element={<Cart />} />
        {/* <Route exact path="/" element={<Navigate replace to="/products" />} /> */}
        {/* <Route path="/cart/add/:id" element={isLoggedIn ? <ProductList/> : <Login/> } /> */}
        {/* <Route path="/" element={<Navigate replace to="/products" />} /> */}
      </Routes>
    </Router>
  );
};

export default UserRoutes;

// import React from "react";
// import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import ProductList from "../Product/ProductList";
// import { Home } from "../Layout/Home";
// import {Login} from '../User/login'
// import { SignUp } from "../User/signup";
// import { useSelector } from "react-redux";
// // import ProductListDetails from "../Product/ProductListDetails";

// export default function ProductRoutes(){
//     const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn)
//     console.log("IS loggedin in product routes is",isLoggedIn)
//     return(
//         <section id="rightsection" className="sidebar right">
//             <Router>
//                 <div>
//                     <nav>
//                         <a href="/home">Home</a> &nbsp;
//                         <Link to="/product">Products</Link>
//                         <a href="signup"></a>
//                         <a href='login'></a>
//                     </nav>
//                     <Routes>
//                         <Route  path="/home" element={<Home />} />
//                         <Route  path="/product" element={<ProductList />} />
//                         <Route path="/cart/add/:id" element={isLoggedIn ? <ProductList/> : <Login/> } />
//                         <Route path='signup' element={<SignUp/>} />
//                         <Route path='login' element={<Login/>} />
//                     </Routes>
//                 </div>
//             </Router>
//         </section>
//     )
// }
