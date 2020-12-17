import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="container">
        <img
          className="dpavimg"
          src="https://i.ibb.co/qrgf2x7/DPAV-Logo1.png"
          alt="dpavlogo"
        />
        <div className="enter">
          <Link className="enterlink" to="/about">
            <p>| ENTER |</p>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
