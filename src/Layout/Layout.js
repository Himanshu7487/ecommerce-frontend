import React from "react";
import "./layout.css";
import Article from "./Article";
import { Footer } from "./Footer";
import Nav from "./Nav";
// import { Header } from "./Header";
const Layout = () => {
  return (
    <div>
      <header>{/* <Header /> */}</header>
      <div id="main">
        <nav>
          <Nav />
        </nav>
        <article>
          <Article />
        </article>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
