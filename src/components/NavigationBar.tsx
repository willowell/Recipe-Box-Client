import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'

import styled from '@emotion/styled'

import logo from '../assets/Delish_200x200.png'

const StyledNavbar = styled.div`
    .navbar {
        background-color: #fff7ff
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #650d88;

        &:hover {
            color: #e80c7a;
        }
    }
`

export default function NavigationBar() {
    return (
        <StyledNavbar>
            <Navbar>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                        alt="Delish logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </StyledNavbar>
    )
}