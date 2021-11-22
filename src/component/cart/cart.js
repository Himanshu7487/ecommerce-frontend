import React, { useEffect, useState } from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import ProductListDetails from '../../Product/ProductListDetails';
// import {fetchProducts} from '../Action/ProductAction'
import axios from 'axios';


const Cart = () => {

  // const dispatch = useDispatch();
  // const loading = useSelector(state => state.ProductReducer.loading);
  // const products = useSelector(state => state.ProductReducer.product);
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  console.log("products length", products.length);

  const [user] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  //   console.log("product in list", products);
  useEffect(async () => {
    if (user) {
      const data = await axios.post("http://localhost:4000/cart/", { userId: user._id });
      console.log(data.data.data);
      setProducts(data.data.data);
      const arr = data.data.data;
      let p = 0;
      for (let i = 0; i < arr.length; i++) {
        p += arr[i].price ? arr[i].price : 0;
      }
      setPrice(p);
    }
  }, []);
  // if(loading) return <FadeLoader color={"red"} height={100} margin={150} />
  // if(loading) return <div>No products or Cant fetch from server</div>
  return (
    <div>
      {/* {console.log("PRICE", price)}
      <div classNameName="container-fluid">
        <div classNameName="row clearfix">
          {products.map(p => <ProductListDetails forcart={true} key={p.id} product={p} />)}
        </div>
      </div> */}
     
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Products</th>
            <th scope="col">Product Price</th>
            <th scope="col">Quantity </th>
            <th scope="col">Action </th>


          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => {
              return(
              <tr key={product.id}>

                <td>{product.productname}</td>
                <td>{product.price}</td>
                <td><input type="text" /></td>
                <td><button className="btn btn-primary" >-</button><button className="btn btn-info">+</button></td>

              </tr>
              )
            })
          }

        </tbody>
      </table>
      <div>
        <span classNameName="Total">Sub price: {price}</span>
      </div>
    </div>
  )
}

export default Cart
