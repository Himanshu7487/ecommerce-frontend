import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;
const ProductListDetails = ({ product, forcart }) => {
  console.log(product, "Hello");
  const [user] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const addToCart =async (prod) => {
    // const old = localStorage.getItem("cart");
    // if (old) {
    //   const arr = JSON.parse(old);
    //   const newArr = [...arr, prod];
    //   localStorage.setItem("cart", JSON.stringify(newArr));
    // } else {
    //   const arr = [prod];
    //   localStorage.setItem("cart", JSON.stringify(arr));
    // }
    
    const { data } = await axios.post(`http://localhost:4000/cart/addCart`,{productname:prod.productname,price:prod.price, userId:user._id,quantity:prod.quantity});
    
    return data;

  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="card mt-2 h-100">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Product description is yet to be defined</p>
          <img
            src={`${API_KEY}` + "/assets/" + `${product.imagefile}`}
            width="50"
            height="50"
            className="d-inline-block align-top img-fluid"
            alt="No image Avail"
          />
          <br />
          <div className="cardhover">
              {forcart? null :
              <Fragment>
              <Link
                to={`/productDetails/${product._id}`}
                className="btn btn-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="PRODUCT DETAILS"
              >
                <i
                  className="fa fa-plus fa-2x"
                  aria-hidden="true"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="PRODUCT DETAILS"
                ></i>
              </Link>
              {user && (
                <a
                  //   to={`/cart/add/${product._id}`}
                  className="btn btn-primary ml-4"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ADD To Cart"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  <i
                    className="fa fa-cart-plus fa-2x"
                    aria-hidden="true"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="ADD To CART"
                  ></i>
                </a>
              )}
              </Fragment>
              }
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListDetails;
