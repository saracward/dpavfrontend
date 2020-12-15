import React from "react";
import Nav from "./Nav";
import { MDBContainer } from "mdbreact";

function Brands() {
  return (
    <div>
      <div className="Brands">
        <Nav />
        <h1 className="brandsTitle">
          <b>Brands We Love</b>
        </h1>

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
