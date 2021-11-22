import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../Action/ProductAction';
const Dashboard = () => {
    const dispatch = useDispatch();
    const [isAdd, setIsAdd] = useState(false);
    const [productname, setProductname] = useState("");
    const [price, setPrice]= useState("");
 const handleisAdd=()=>{
     setIsAdd(!isAdd)
 }
    // const loading = useSelector(state => state.ProductReducer.loading);
    const products = useSelector(state => state.ProductReducer.product);
    console.log("product in list", products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const handleProduct=(e)=>{
        e.preventDefault();
          axios.post("http://localhost:4000/product/add", { productname: productname, price: price }).then(res=>{
            console.log(res);
             
             alert('Your review submitted successfully')
          
         
           }).catch(err=>{
            console.log(err);
         
           })
    }

    
    return (
        <div> { isAdd && <form>
            <div className="form-group">
              <label >Enter ProductName</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name" value={productname} onChange={(e)=>setProductname(e.target.value)} />
              
            </div>
            <div className="form-group">
              <label >Enter Price</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleProduct}>Submit</button>
          </form>
        }
            <br />
            <button onClick={handleisAdd}>Add Product</button>

            <div classNameName="container-fluid">
                <table classNameName="table">
                    <thead>
                        <tr>
                            <th scope="col">Products</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (
                                    <tr key={product.id}>

                                        <td>{product.productname}</td>
                                        <td>{product.price}</td>
                                        <td><button>Edit</button></td>
                                        <td><button >Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard







// import React from 'react'
// // import { useSelector } from 'react-redux';
// // import ProductListDetails from '../../Product/ProductListDetails';
// const Dashboard = () => {
//     // const loading = useSelector(state => state.ProductReducer.loading);
//     // const products = useSelector(state => state.ProductReducer.product); 
//     return (
//         <div>
//             <table classNameName='table table-bordered table-responsive-sm'>
//                  <thead>
//                      <tr>
//                          <th>Name</th>
//                          <th>Price</th>
//                          <th>Actions</th>
//                      </tr>
//                  </thead>

//                  <tbody>


//                  {products.map(p=> <ProductListDetails key={p.id} product={p}/>)}

//                    return <tr>
//                        <td>{product.productname}</td>
//                        <td>{product.price}</td>

//                        <td>{product._id}</td>
//                        <td>

//                      </td>

//                    </tr>

//              ))

//                  </tbody>
//              </table>
//         </div>
//     )
// }

// export default Dashboard



// // import React from 'react'
// // import {useState, useEffect} from 'react'
// // import {useDispatch, useSelector} from 'react-redux'
// // import Loader from '../components/Loader'
// // import Error from '../components/Error'
// // import {Link} from 'react-router-dom'
// // import { getAllProducts , deleteProduct } from '../actions/productActions'
// // export default function Productslist() {
// //     const dispatch = useDispatch()
// //     const getallproductsstate = useSelector(state =>state.getAllProductsReducer)
// //     const {products , loading , error} = getallproductsstate

// //     useEffect(() => {

// //         dispatch(getAllProducts())

// //     }, [])
// //     return (
// //         <div>

// //             <h2>Products list</h2>

// //             <table classNameName='table table-bordered table-responsive-sm'>
// //                 <thead>
// //                     <tr>
// //                         <th>Name</th>
// //                         <th>Price</th>
// //                         <th>Stock</th>
// //                         <th>Id</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>

// //                 <tbody>
// //                 {loading && (<Loader/>)}
// //             {error && (<Error error='something went wrong'/>)}
// //             {products && (products.map(product=>{

// //                   return <tr>
// //                       <td>{product.name}</td>
// //                       <td>{product.price}</td>
// //                       <td>{product.countInStock}</td>
// //                       <td>{product._id}</td>
// //                       <td>
// //                           <i classNameName="far fa-trash-alt" style={{marginRight:'10px'}} onClick={()=>{dispatch(deleteProduct(product._id))}}></i>
// //                           <Link to={`/admin/editproduct/${product._id}`}><i classNameName="fas fa-edit"></i></Link>
// //                     </td>

// //                   </tr>

// //             }))}

// //                 </tbody>
// //             </table>



// //         </div>
// //     )
// // }
