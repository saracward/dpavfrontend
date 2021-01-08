import React from "react";
import Nav from "./Nav";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

function About() {
  return (
    <div className="About">
      <Nav />
      <h1 className="aboutTitle">
        <b>Who We Are</b>
      </h1>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/drLSB5Y/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/KjDLQDL/melissa-askew-AUXanrck-Xn0-unsplash.jpg"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/px6RLXf/clark-tibbs-oq-Stl2-L5ox-I-unsplash.jpg"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <p>
        DPAV is a high-end audio, lighting, and video company based out of
        Panama City, Florida, serving the live music industry for over 25 years.
        We are equipped to take care of everything from national music acts to
        multiple day conferences.
        <br />
        Some of the gear we use includes Meyer Sound, Avid Venue Consoles, Hog
        Lighting Desks and more. We pride ourselves on having the best audio
        system engineers, lighting designers, and video directors in the field.
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
