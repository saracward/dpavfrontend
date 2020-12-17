import React from "react";
import Nav from "./Nav";
import { MDBRow, MDBCol } from "mdbreact";

function Contact() {
  return (
    <div className="contact">
      <Nav />
      <section className="my-5">
        <h1 className="contactUs">
          <b>Contact us</b>
        </h1>
        <h2 className="text-center w-responsive mx-auto pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </h2>
        <br />
        <br />
        <center>
          <MDBRow className="text-center">
            <MDBCol md="4">
              <img
                className="location"
                src="https://i.ibb.co/1mySJrB/location-white.png"
              />
              <p>Atlanta, Ga</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <img
                className="phone"
                src="https://i.ibb.co/VDTQJL1/phone-white.png"
              />
              <p>(850) 628 1145</p>
              <p className="mb-md-0">Mon - Fri, 9:00am-5:00pm</p>
            </MDBCol>

            <MDBCol md="4">
              <a href="mailto:cassandra@dpaudiovideo.net">
                <img
                  className="demail"
                  src="https://i.ibb.co/89X70fs/mail-white.png"
                />
              </a>
              <p className="mb-md-0">info@dpaudiovideo.net</p>
            </MDBCol>
          </MDBRow>
        </center>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Contact;
