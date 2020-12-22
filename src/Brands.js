import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";

function Brands() {
  return (
    <div>
      <div className="Brands">
        <Nav />
        <h1 className="brandsTitle">
          <b>Brands We Love</b>
        </h1>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="food"
                />
              </MDBView>

              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold">
                  Lighting{" "}
                </MDBCardTitle>
                <div className="lightingButton">
                  <Link className="lightingLink" to="./Lighting">
                    <MDBBtn color="unique">| Our Gear |</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="food"
                />
              </MDBView>

              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold">Audio </MDBCardTitle>
                <div className="audioButton">
                  <Link className="audioLink" to="./Audio">
                    <MDBBtn color="unique">| Our Gear |</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="food"
                />
              </MDBView>

              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold">Video </MDBCardTitle>
                <div className="videoButton">
                  <Link className="videoLink" to="./Video">
                    <MDBBtn color="unique">| Our Gear |</MDBBtn>
                  </Link>
                </div>{" "}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <h2 className="gearList">
          <ul>Novastar</ul>
          <ul>Shure</ul>
          <ul>Meyer Sound</ul>
          <ul>Martin Lighting</ul>
          <ul>Chauvet Professional</ul>
          <ul>AJA</ul>
          <ul>Blackmagic Design</ul>
          <ul>High End Systems</ul>
          <ul>Waves Audio</ul>
          <ul>JBL</ul>
          <ul>Laird Digital Cinema</ul>
          <ul>Decimator</ul>
          <ul>Drape Kings</ul>
          <ul>Avid</ul>
          <ul>ITT Truss</ul>
          <ul>Staging Concept</ul>
          <ul>Clear-Com</ul>
          <ul>Neutrik</ul>
        </h2>
        <br />
      </div>
    </div>
  );
}

export default Brands;
