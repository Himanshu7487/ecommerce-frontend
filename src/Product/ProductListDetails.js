import React from 'react'
import {Link} from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;
const ProductListDetails = ({product}) => {
    console.log(product,"Hello");
    return (
        
            <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="card mt-2 h-100">
                    <div className="card-body">
    
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Product description is yet to be defined</p>
                        <img src={`${API_KEY}`+'/assets/'+`${product.imagefile}`} width="50" height="50"
                             className="d-inline-block align-top img-fluid" alt="No image Avail" />
                        <br />
                        <div className="cardhover">
                            <Link to={`/productDetails/${product._id}`} className="btn btn-primary"
                            data-toggle="tooltip" data-placement="top" title="PRODUCT DETAILS">
                                <i className="fa fa-plus fa-2x" aria-hidden="true" data-toggle="tooltip"
                                data-placement="top" title="PRODUCT DETAILS"></i>
                            </Link>
                            <Link to={`/cart/add/${product._id}`} className="btn btn-primary ml-4"
                            data-toggle="tooltip" data-placement="top" title="ADD To Cart">
                                <i className="fa fa-cart-plus fa-2x" aria-hidden="true" data-toggle="tooltip"
                                data-placement="top" title="ADD To CART"></i>
                            </Link>
                            </div>     
                    </div>
                </div>
    
            </div>
        )
    
}

export default ProductListDetails
