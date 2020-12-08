import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

function Contact() {
  return (
    <div className="contact">
      <Nav />
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <center>
          <MDBRow className="text-center">
            <MDBCol md="4">
              <img
                className="phone"
                src="https://i.ibb.co/h9nk25f/location.png"
              />
              <p>Atlanta, Ga</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <br />
            <br />
            <MDBCol md="4">
              <img className="phone" src="https://i.ibb.co/NY4vTTZ/call.pngs" />
              <p>(850) 628 1145</p>
              <p className="mb-md-0">Mon - Fri, 9:00am-5:00pm</p>
            </MDBCol>

            <MDBCol md="4">
              <a href="mailto:cassandra@dpaudiovideo.net">
                <img
                  className="email"
                  src="https://i.ibb.co/BKy78jc/58485698e0bb315b0f7675a8.png"
                />
              </a>
              <p>chris.mcdonald@dpaudiovideo.net</p>
              <p className="mb-md-0">cassandra@dpaudiovideo.net</p>
            </MDBCol>
          </MDBRow>
        </center>
      </section>
    </div>
  );
}

export default Contact;
