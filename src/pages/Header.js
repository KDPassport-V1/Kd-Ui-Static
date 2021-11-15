import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,Collapse,Nav,NavItem,NavLink } from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar
                color="light"
                expand="md"
                container
                fixed="top"
                className="headerWrapper"
            >
                <NavbarBrand href="/">
                    KWOKMAN
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar className={'headerRight'}>
                    <Nav
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/aboutus/">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/schedule">
                                Schedule
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login/">
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>      
    );
};

export default Header;