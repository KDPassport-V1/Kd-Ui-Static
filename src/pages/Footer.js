import React from 'react';
import {Container,Row, Col } from 'reactstrap';
import { NavLink } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='footerWrapper'>
            <Container>
                <Row>
                    <Col xs="6" sm="3">
                        <h5>Quick Links</h5>
                        <NavLink href="/">
                            Home
                        </NavLink>
                        <NavLink href="/aboutus">
                            About KD
                        </NavLink>
                        <NavLink href="/">
                            Faq
                        </NavLink>
                    </Col>
                    <Col xs="6" sm="3">
                        <h5>Info</h5>
                        <NavLink href="/">
                             Privacy Policy
                        </NavLink>
                        <NavLink href="/">
                            Terms of Service
                        </NavLink>
                        <NavLink href="/">
                            Support
                        </NavLink>
                    </Col>
                    <Col xs="6" sm="3">
                        <h5>Contact</h5>
                        <p>#xxx, XXXX street,
                        Address ..</p>
                    </Col>
                    <Col xs="6" sm="3">
                        {/* <h5>Quick Links</h5>
                        <p>Home</p> */}
                    </Col>
                </Row>
                <Row>
                    <Col><p class="copyRight">@ Kdpassport</p> </Col>
                </Row>
            </Container>
        </footer>     
    );
};

export default Footer;