import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">Anime City</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/favorites">Favorites</Nav.Link>
							<Nav.Link href="/to-watch">To Watch</Nav.Link>
							<Nav.Link href="/users">Users</Nav.Link>
							<Nav.Link href="" onClick={handleLogout}>Log Out</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			) : (
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">Anime City</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/login">Log In</Nav.Link>
							<Nav.Link href="/signup">Sign Up</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			)}
		</>
	)
}

export default NavBar