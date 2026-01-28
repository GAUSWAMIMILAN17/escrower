import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
      <div className="container">

        <a className="navbar-brand fw-bold" href="/">
          Escrower
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#EscrowerNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="EscrowerNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">

            {["Home","About","Services","Pricing","Team","Blog","Contacts"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link custom-nav-link" href="#">
                  {item}
                </a>
              </li>
            ))}

          </ul>

          <div className="ms-lg-4">
            <button className="btn custom-btn px-4">
              Generate Image
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
