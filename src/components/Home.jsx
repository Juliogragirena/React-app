import React from "react";
import Imagen from "../images/astronautas.svg";
import Logo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <main className="main">
        <div className="container-fluid img-container text-white">
          <div className="row img-row">
            <div className="col-12 col-md-5 mt-5 d-flex align-items-center justify-content-center">
              <div className="container">
                <div className="row">
                  <img src={Logo} alt="Logo" className="Logo mx-auto" />
                </div>
                <div className="row row-1 mx-auto text-left">
                  <h1 className="mt-3 text-uppercase">print your Badge</h1>
                  <h4>the easies way to manag your conference</h4>
                </div>
                <div className="row row-1 mx-auto dp-flex justify-content-center ">
                  <Link to="/badges/new">
                    <button className="btn btn-primary btn-lg mt-2">
                      Start Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-none col-md mt-5 d-md-flex align-items-center justify-content-center">
              <img src={Imagen} alt="Astronautas" className="Imagen" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
