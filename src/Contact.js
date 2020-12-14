import React from "react";
import Nav from "./Nav";
import { MDBRow, MDBCol } from "mdbreact";

function Contact() {
  return (
    <div className="contact">
      <Nav />
      <section className="my-5">
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h1>
        <h2 className="text-center w-responsive mx-auto pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </h2>
        <center>
          <MDBRow className="text-center">
            <MDBCol md="4">
              <img
                className="phone"
                src="https://i.ibb.co/h9nk25f/location.png"
              />
              <h2>Atlanta, Ga</h2>
              <h2 className="mb-md-0">United States</h2>
            </MDBCol>
            <br />
            <br />
            <MDBCol md="4">
              <img className="phone" src="https://i.ibb.co/NY4vTTZ/call.pngs" />
              <h2>(850) 628 1145</h2>
              <h2 className="mb-md-0">Mon - Fri, 9:00am-5:00pm</h2>
            </MDBCol>

            <MDBCol md="4">
              <a href="mailto:cassandra@dpaudiovideo.net">
                <img
                  className="email"
                  src="https://i.ibb.co/BKy78jc/58485698e0bb315b0f7675a8.png"
                />
              </a>
              <h2 className="mb-md-0">info@dpaudiovideo.net</h2>
            </MDBCol>
          </MDBRow>
        </center>
      </section>
    </div>
  );
}

export default Contact;
