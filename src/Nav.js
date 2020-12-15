import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Route } from "react-router-dom";

const TopNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light className="navbar">
        <NavbarBrand href="/" className="mr-auto">
          <img
            className="minilogo"
            src="https://i.ibb.co/s3g15zG/DPAV-mini-Logo1.png"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Route>
                <NavLink href="/about">About</NavLink>
              </Route>
            </NavItem>
            <NavItem>
              <NavLink href="/brands">Brands</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
