import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../hooks/useAuth'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
        <Navbar bg="warning" variant="warning" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className="text-success">Online Food Delivery</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home" className="red-color">Home</Nav.Link>
                    {user?.email && <Nav.Link as={Link} to="/orders" className="red-color">My orders</Nav.Link>}
                    {user?.email && <Nav.Link as={Link} to="/m-orders" className="red-color">Manage all orders</Nav.Link>}
                    {user?.email && <Nav.Link as={Link} to="/add-food" className="red-color">Add new Food</Nav.Link>}

                    <span className="red-color">{user.displayName} </span>
                    {user?.email ? <button type="button" class="btn btn-success" onClick={logout}>Log out</button> : <Nav.Link as={Link} to="/login" className="red-color">Login</Nav.Link>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;