import React from "react";
import { Navbar } from "react-bulma-components";

const Nav = () => {
  return (
    <Navbar fixed={"top"} color={"primary"}>
      <Navbar.Brand>
        <Navbar.Item renderas="a" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
