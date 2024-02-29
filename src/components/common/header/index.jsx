'use client';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import menuItems from './menu.json';
import Link from 'next/link';

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Product Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {menuItems.map((item) => (
                            <Nav.Link key={item.id} href={item.url} as={Link}>
                                {item.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
