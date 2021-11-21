import React from "react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav className="navbar fixed-top" style={{ background: "white" }}>
        <a className="navbar=brand" href="#">
          {/* <img src="" alt='logo' width="30" height='30'
                  className='d-inline-block align-top' /> */}
          <span className="ml-2">Ecommerce</span>
        </a>
        <ul className="nav navbar-left">
          <li className="hidden-sm-group">
            <div className="input-group">
              <input type="text" placeholder="search..." />
              <i className="fa fa-search fa-2x ml-1" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
        <ul className="nav navbar-right">
          <li className="mr-5"></li>
          <li className="mr-5">
            <Link to="/login">
              <i className="fas fa-cart-plus"></i>
            </Link>
            <i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>
            <i className="fa fa-user-plus fa-2x ml-5" aria-hidden="true"></i>
          </li>
          <li className="mr-5">
            <a
              href="javascript:void(0)"
              className="js-right-sidebar"
              data-close="true"
            >
              <i className="fa fa-cog fa-spin fa-2x fa-fw"></i>
              <span className="sr-only">Loading... </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
