import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ userData , logOut }) {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            ReelHub
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="movies"
                  >
                    Movies
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="people"
                  >
                    People
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="about"
                  >
                    About
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="TV">
                    TV
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex me-2">
                <a className="nav-link active" aria-current="page" href="">
                  {" "}
                  <i className="fab fa-facebook "></i>{" "}
                </a>
                <a className="nav-link active" aria-current="page" href="">
                  {" "}
                  <i className="fab fa-twitter "></i>{" "}
                </a>
                <a className="nav-link active" aria-current="page" href="">
                  {" "}
                  <i className="fab fa-instagram "></i>{" "}
                </a>
                <a className="nav-link active" aria-current="page" href="">
                  {" "}
                  <i className="fab fa-youtube "></i>{" "}
                </a>
              </li>

              {
                userData ? <li className="nav-item d-flex justify-content-center align-items-center">
                <span className="nav-link active" aria-current="page">
                  welcome {userData.firstname} {userData.lastname}
                </span>
                <span  style={{ cursor : 'pointer' }} onClick={logOut}>Logout</span>
              </li>: <>
               <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="register"
                >
                  Register
                </Link>
              </li>
              </>
              }

             
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
