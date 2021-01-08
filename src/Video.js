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

function Video() {
  return (
    <div>
      <Nav />
      <div>
        <br />
        <p className="videoGear">
          <h1 className="aboutTitle">
            <b>Hello Video Gear Page</b>
          </h1>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>
          <ul>AJA</ul>
          <ul>Blackmagic Design</ul>
          <ul>Decimator</ul>
          <ul>Novastar</ul>
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
      </div>
    </div>
  );
}

export default Video;
