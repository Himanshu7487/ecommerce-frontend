import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "../Layout/Header";
import ProductList from "../Product/ProductList";

export default function ProducRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<Navigate replace to="/products" />} />
      </Routes>
    </Router>
  );
}
