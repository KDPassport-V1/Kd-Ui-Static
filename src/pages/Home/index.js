import React from 'react';
import {Container,Row, Col,Button } from 'reactstrap';
import bannerImg from '../../Assets/images/bannerImg.jpg';


const Home = () => {
    return (
        <React.Fragment>
            <section className='bannerWrapper'>
                <Container>
                    <Row>
                        <Col>
                            <div className='bannerLeftWrapper'>
                                <h1>Treating patients should be fast and easy</h1>
                                <h5>Software for scheduling and patient management at the point of care.</h5>
                                <Button color="primary" > Try it Now </Button>
                            </div>
                        </Col>
                        <Col>
                            <img src={bannerImg} title='banner' className='bannerImage' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='whatIsWrapper'>
                <Container>
                    <Row>
                        <Col>
                            <h1>What is Kwokman?</h1>
                            <p className="whatisInfo">Cloud-based software to help you run your business and give patients convenient and personalized care.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">
                            <div className='item'>
                                <h3>Eliminate the paperwork</h3>
                                <p>Online appointment scheduling and registration to collect everything you need in advance.</p>
                            </div>                            
                        </Col>
                        <Col xs="6" sm="4">
                            <div className='item'>
                                <h3>Stay in touch</h3>
                                <p>Email, text and chat to reach patients with reminders and care follow-up.</p>
                            </div>                            
                        </Col>
                        <Col xs="6" sm="4">
                            <div className='item'>
                                <h3>Increase Profits</h3>
                                <p>Automated reporting for insurance claims and regulatory compliance.</p>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='features'>
                <Container>
                    <Row>
                        <Col xs="6" sm="8" >
                            <ul className='featuresList'>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Private & Secure</h5>
                                        <p>Best in class privacy and security standards</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Mobile Friendly</h5>
                                        <p>Accessible via phone/tablet, no app needed</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Flexible Integration</h5>
                                        <p>Paperless lab integration to deliver results immediately</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Email/Text Notifications</h5>
                                        <p>Patients receive confirmations via text and email</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Online Appointments & Scheduling</h5>
                                        <p>Flexible scheduling tool for website events & employer dashboard</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Automated Reporting</h5>
                                        <p>State reporting, registry integration, and exports for claims processing</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Easy Implementation</h5>
                                        <p>Start using Dragonfly in minutes</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Reliable & Scalable</h5>
                                        <p>Built on proven enterprise software platform managing millions of transactions</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='feature'>
                                        <div className="featureIcon"></div>
                                        <h5>Portal Management</h5>
                                        <p>Customizable templates to promote your service</p>
                                    </div>
                                </li>                               
                            </ul>
                        </Col>
                        <Col xs="6" sm="4">
                            <h1>Kwokman Features</h1>
                            <p className="whatisInfo">Manage vaccines and testing at scale, including scheduling, intake, reporting, and follow-up.</p>
                        </Col>
                    
                    </Row>
                </Container>
            </section>
        </React.Fragment>
        
    );
};

export default Home;