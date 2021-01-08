import React from "react";
import Nav from "./Nav";
import Brands from "./Brands";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";

function Lighting() {
  return (
    <div>
      <Nav />
      <div className="lighting">
        <br />
        <p className="lightingGear">
          <h1 className="aboutTitle">
            <b>Hello Lighting Gear Page</b>
          </h1>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>
          <ul>Martin Lighting</ul>
          <ul>Chauvet Professional</ul>
          <ul>High End Systems</ul>
          <ul>arri</ul>
        </h2>
        <br />
        <br />
        <br />
        <br />
        <Link to="./Brands">
          <MDBBtn color="light">| BACK |</MDBBtn>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Lighting;
