import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Google Book Search
        </Link>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="/">
              Search
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
