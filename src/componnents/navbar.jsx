import React, { Component } from "react";

//Stateless Fuctional Component
//funcional componentte props degiskeni kullanarak degerleri aliyoruz.
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-pri bg-success">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
