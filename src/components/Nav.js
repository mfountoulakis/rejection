import React from "react";
import { Navbar } from "react-bulma-components";

const Nav = () => {
	return (
		<Navbar fixed={"top"} color={"primary"}>
			<Navbar.Brand>
				<Navbar.Item renderAs="a" href="#">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						alt="Bulma: a modern CSS framework based on Flexbox"
						width="112"
						height="28"
					/>
				</Navbar.Item>
				<Navbar.Burger />
			</Navbar.Brand>
			<Navbar.Menu active={"true"}>
				<Navbar.Container>
					<Navbar.Item href="#">Second</Navbar.Item>
				</Navbar.Container>
				<Navbar.Container position="end">
					<Navbar.Item href="#">At the end</Navbar.Item>
				</Navbar.Container>
			</Navbar.Menu>
		</Navbar>
	);
};

export default Nav;
