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

function Audio() {
  return (
    <div>
      <Nav />
      <div>
        <br />
        <p className="audioGear">
          <h1 className="aboutTitle">
            <b>Hello Audio Gear Page</b>
          </h1>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>
          <ul>Shure</ul>
          <ul>Meyer Sound</ul>
          <ul>Waves Audio</ul>
          <ul>JBL</ul>
          <ul>Avid</ul>
          <ul>Neutrik</ul>
        </h2>
        <br />
        <br />
        <br />
        <div>
          <Link to="./Brands">
            <MDBBtn color="light">| BACK |</MDBBtn>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Audio;
