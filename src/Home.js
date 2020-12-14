import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="container">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            // rotate: [0, 30, 30, 0],
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
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
        </motion.div>
      </div>
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
