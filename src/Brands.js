import React from "react";
import Nav from "./Nav";
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

function Brands() {
  return (
    <div>
      <Nav />
      <h1 className="brandsTitle">
        <b>Brands We Love</b>
      </h1>
      <div className="Brands">
        <MDBRow>
          <MDBCol md="4">
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay="white-slight"
                  className="card-img-top"
                  src="https://i.ibb.co/Mc50nWy/dawn-lio-g-Bqqes-BOnk-Y-unsplash.jpg"
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
                  src="https://i.ibb.co/7255wPB/saso-tusar-Qtg-GYlug6-Cw-unsplash.jpg"
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
                  src="https://i.ibb.co/rtnyBdf/frankie-lopez-f-XQpp-Si-TRGg-unsplash.jpg"
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
        {/* <h2 className="gearList">
          <ul>Laird Digital Cinema</ul>
          <ul>Drape Kings</ul>
          <ul>ITT Truss</ul>
          <ul>Staging Concept</ul>
          <ul>Clear-Com</ul>
        </h2> */}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Brands;
