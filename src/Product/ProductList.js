import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductListDetails from './ProductListDetails';
import {fetchProducts} from '../Action/ProductAction'

const ProductList = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.ProductReducer.loading);
    const products = useSelector(state => state.ProductReducer.product);
console.log("product in list", products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    // if(loading) return <FadeLoader color={"red"} height={100} margin={150} />
    if(loading) return <div>No products or Cant fetch from server</div>
    return (
        <div>
            
                 <div className="container-fluid">
                    <div className="row clearfix">
                        {products.map(p=> <ProductListDetails key={p.id} product={p}/>)}
                    </div>
                </div>
            
        </div>
    )
}

export default ProductList
