import React, {useEffect, useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import ProductListDetails from '../../Product/ProductListDetails';
// import {fetchProducts} from '../Action/ProductAction'
import axios from 'axios';


const Cart = () => {

    // const dispatch = useDispatch();
    // const loading = useSelector(state => state.ProductReducer.loading);
    // const products = useSelector(state => state.ProductReducer.product);
    const [products, setProducts] = useState([]);
    const [user] = useState(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null
    );
    //   console.log("product in list", products);
    useEffect(async () => {
      if (user) {
        const data = await axios.post("http://localhost:4000/cart/", {userId: user._id});
        console.log(data);
        setProducts(data.data.data);
      }
    }, []);
    // if(loading) return <FadeLoader color={"red"} height={100} margin={150} />
    // if(loading) return <div>No products or Cant fetch from server</div>
    return (
        <div>
            
                 <div className="container-fluid">
                    <div className="row clearfix">
                        {products.map(p=> <ProductListDetails forcart={true} key={p.id} product={p}/>)}
                    </div>
                </div>
            
        </div>
    )
}

export default Cart
