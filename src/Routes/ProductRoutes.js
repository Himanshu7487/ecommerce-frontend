import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import ProductList from '../Product/ProductList'

export default function ProducRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/" element={<Navigate replace to="/products" />} />
            </Routes>
        </Router>
    )
}