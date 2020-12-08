import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <img src="https://i.ibb.co/qrgf2x7/DPAV-Logo1.png" alt="dpavlogo" />
      <div className="enter">
        <Link to="/about">
          <h3>ENTER</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
