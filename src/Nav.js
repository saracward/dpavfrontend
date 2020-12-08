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
import { Link, Route, Switch } from "react-router-dom";

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="black" light className="navbar">
        <NavbarBrand href="/" className="mr-auto">
          DPAV
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Route>
                <NavLink href="/About">About</NavLink>
              </Route>
            </NavItem>
            <NavItem>
              <NavLink href="/Brands">Brands</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
