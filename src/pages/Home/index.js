import React from 'react';
import {Container,Row, Col,Button, Label } from 'reactstrap';
import bannerImg from '../../Assets/images/bannerImg.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


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
                                        <p>Start using KWOKMAN in minutes</p>
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
            <section className='customers'>
                <Container>
                    <Row className='customer-head'>
                        <Col>
                            <div>
                                <h2>What Our Customers</h2>
                                <h2>Are Saying</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="12" >
                            <ul className='customerList'>
                                <li>
                                    <div className='customer'>
                                        <div className="customerIcon"></div>
                                        <p className='customer-p'>Your team and software are really something special and we feel so lucky to have found you guys. We have actually been getting some of our work because we use KWOKMAN! Everyone loves the paperless solution.</p>
                                        <h5>Jay Rigby</h5>
                                        <p>Owner, Spotlight Medical, LLC</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='customer'>
                                        <div className="customerIcon"></div>
                                        <p className='customer-p'>We had a very successful drive-through event …. Honestly, if it were not for KWOKMAN, I would not have agreed to take on these Pfizer vaccines because it was entirely too much work entering these through the pharmacy software.</p>
                                        <h5>Jay Rigby</h5>
                                        <p>Owner, Spotlight Medical, LLC</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='customer'>
                                        <div className="customerIcon"></div>
                                        <p className='customer-p'>The ability of the software to integrate with the lab or other entities is a strong selling point. Your company is doing what we need in healthcare–which is to utilize efficient integration between labs and other entities.</p>
                                        <h5>Jay Rigby</h5>
                                        <p>Owner, Spotlight Medical, LLC</p>
                                    </div>
                                </li> 
                                <li>
                                    <div className='customer'>
                                        <div className="customerIcon"></div>
                                        <p className='customer-p'>Your team and software are really something special and we feel so lucky to have found you guys. We have actually been getting some of our work because we use KWOKMAN! Everyone loves the paperless solution.</p>
                                        <h5>Jay Rigby</h5>
                                        <p>Owner, Spotlight Medical, LLC</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='customer'>
                                        <div className="customerIcon"></div>
                                        <p className='customer-p'>We had a very successful drive-through event …. Honestly, if it were not for KWOKMAN, I would not have agreed to take on these Pfizer vaccines because it was entirely too much work entering these through the pharmacy software.</p>
                                        <h5>Jay Rigby</h5>
                                        <p>Owner, Spotlight Medical, LLC</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='customer'>
                                        <div className="customerIcon"></div>
                                        <p className='customer-p'>The ability of the software to integrate with the lab or other entities is a strong selling point. Your company is doing what we need in healthcare–which is to utilize efficient integration between labs and other entities.</p>
                                        <h5>Jay Rigby</h5>
                                        <p>Owner, Spotlight Medical, LLC</p>
                                    </div>
                                </li>                             
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='pricing'>
                <Container>
                    <Row>
                        <Col>
                            <h2>Pricing</h2>
                            <p className="whatisInfo">KWOKMAN charges a transaction fee for each service processed using our platform.  Fees vary based upon volume. Supports all procedure types including vaccines, testing, counseling, travel advice, medication management, and diabetes monitoring.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="2"></Col>
                        <Col xs="12" sm="4" className='pricing-card'>
                            <div className='pricing-item'>
                                <h3>Pharmacies</h3>
                                <p>For providers offering a range of point-of-care services to patients</p>
                                <p>Up To <span>1,500</span> encounters</p>
                                <p>$1 fee per procedure</p>
                                <Button color="primary" > Get Started </Button>
                                <h5>Plan details:</h5>
                                <ul>
                                    <li>Appointment scheduling</li>
                                    <li>Automated registration, intake, and reporting</li>
                                    <li>Easily manage care delivery and compliance</li>
                                    <li>Fully customizable forms</li>
                                    <li>Standard exports for DoH, billing, and claims processing</li>
                                    <li>Track and send results automatically</li>
                                    <li>Payment processing</li>
                                    <li>Testing and vaccination events</li>
                                    <li>Employer & patient portal</li>
                                    <li>Lab integration services and immunization registry</li>
                                </ul>
                            </div>                            
                        </Col>
                        <Col xs="12" sm="4" className='pricing-card'>
                            <div className='pricing-item'>
                                <h3>Enterprise and labs</h3>
                                <p>For high volume customers serving employers and the community</p>
                                <p><span>1,500+</span> encounters</p>
                                <p>Pricing based on volume</p>
                                <Button color="primary" >Talk To Sales </Button>
                                <h5>Plan details:</h5>
                                <ul>
                                    <li>No monthly subscription fee</li>
                                    <li>Appointment scheduling</li>
                                    <li>Automated registration, intake, and reporting</li>
                                    <li>Easily manage care delivery and compliance</li>
                                    <li>Fully customizable forms</li>
                                    <li>Standard exports for DoH, billing, and claims processing</li>
                                    <li>Track and send results automatically</li>
                                    <li>Payment processing</li>
                                    <li>Testing and vaccination events</li>
                                    <li>Employer & patient portal</li>
                                    <li>Lab integration services (additional fees may apply)</li>
                                </ul>
                            </div>                            
                        </Col>
                        <Col xs="12" sm="2"></Col>
                    </Row>
                </Container>
            </section>
            <section className='questions'>
            <Container>
                    <Row>
                        <Col>
                            <h2>Frequently Asked Questions</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="0">
                                    What Does the KWOKMAN Platform Do?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    <p>KWOKMAN is intended to provide a convenient platform allowing (1) patient and employees to easily schedule lab appointments, provide additional information to help with diagnoses, review lab results, and securely share such results with third parties, (2) providers to review lab testing schedules of all patients, manage relevant patient information such as patient-reported health information and insurance coverage, and review lab results of all patients, and (3) employers to review employees scheduled for lab testing and review lab results of employees. The Platform is not intended for use by healthcare providers or patients for continuous patient monitoring in such a way that would allow immediate clinical action in an emergency situation. You may access and use the Platform only in accordance with these Terms, and You agree to comply with all applicable laws, rules, and regulations, including any other policies incorporated into these Terms, such as Our Privacy Policy.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="1">
                                    How does KWOKMAN protect my privacy?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    <p>KWOKMAN respects the information You provide to us. Please see our Privacy Policy for an explanation of the information that we collect from You and how we use Your information that is NOT subject to the Health Insurance Portability and Accountability Act (“HIPAA”), which is the primary federal law governing the privacy of health information. KWOKMAN complies with all applicable requirements of HIPAA with respect to your health information. By accessing or using the Platform, or by downloading or uploading any content from or through the Platform, You acknowledge and agree to the provisions of the Privacy Policy and affirm that the Privacy Policy is a part of the Terms.</p>
                                    <p>By using the Platform and accepting these Terms, You acknowledge that KWOKMAN may share Your Personal Data with other users, including your healthcare provider if you are a patient (if you choose to allow this) or your employer. We may share your information with third parties as described in the Privacy Policy, and will seek your consent before doing so where required by law.</p>
                                    <p>We are not responsible for nor liable to You or any third party for a third party’s treatment of Personal Data, including any collection, use, disclosure, storage, loss, theft or misuse of Personal Data, whether or not such treatment violates applicable law.</p>
                                    <p>EU Citizens and GDPR: Please see our Privacy Policy for specific information regarding Your rights under GDPR and Dragonfly’s commitment to protecting those rights.</p>
                                    <p>PATIENTS: Please be aware that Our Privacy Policy does not address how healthcare providers with whom You share information collected, generated, or stored via the Platform may further use and disclose Your health information. Your healthcare provider’s Notice of Privacy Practices should be publicly available and is usually located on their website. Dragonfly’s Privacy Policy does not apply to the collection, use, disclosure, or treatment of Your Personal Data directly by any provider, clinician, researcher, caregiver, or other healthcare professional and/or entity. You expressly acknowledge and agree that KWOKMAN is neither responsible for nor liable to You or any third party for the treatment of Your Personal Data by any such individual or entity, including any collection, use, disclosure, storage, loss, theft, or misuse of Your Personal Data, whether or not such treatment violates applicable law or the provider’s Notice of Privacy Practices.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="2">
                                    What if my computer or internet access doesn’t work?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    <p>You are responsible for obtaining, installing, maintaining and operating all software, hardware or other equipment (collectively, “Systems”) necessary for You to access and use the Platform. This includes, without limitation, obtaining Internet services, using up to date web-browsers and the best commercially available encryption, antivirus, anti-spyware, and internet security software. You are responsible for the data security of the Systems used to access the Platform and for the transmission and receipt of information using such Systems. We are not responsible for any errors or problems that arise from the malfunction or failure of the Internet or Your Systems.</p>
                                    <h5>THERE ARE ALWAYS CERTAIN SECURITY AND ACCESS AVAILABILITY RISKS ASSOCIATED WITH USING OPEN NETWORKS SUCH AS THE INTERNET, AND YOU EXPRESSLY ASSUME SUCH RISKS.</h5>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="3">
                                    Can I opt-out of receiving emails From KWOKMAN?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                    In using the Platform, You may receive periodic email communications regarding the Platform, new product offers and information regarding the Platform, which are part of the Platform and which You cannot opt out of receiving. You may also receive periodic promotions and other offers or materials We believe might be of interest to You. You can opt-out of receiving these promotional messages at any time by (a) following the unsubscribe instructions contained in each newsletter; or (b) changing your communications preferences in your User Account on the Platform.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="4">
                                    Can I provide you with feedback?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                    We welcome and encourage You to provide feedback, comments, and suggestions for improvements to the Platform (“Feedback”). You may submit Feedback by e-mailing Us at support@KWOKMAN.com. You acknowledge and agree that if You submit any Feedback to Us, You hereby grant to Us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free, sub-licensable, and transferable license under any and all intellectual property rights that You own or control to use, copy, modify, create derivative works based upon, and otherwise exploit the Feedback for any purpose.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="5">
                                    What if you change The Terms and Conditions?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                    <p>With the exception of the Arbitration Agreement included at the end of the Terms, KWOKMAN reserves the right to change or modify the Terms at any time without prior notice to You. If we materially change or modify the Terms, we will let You know by (1) posting a new version to the Platform; and/or (2) sending you a notification to the email address you provided Us in the Registration Data.</p>
                                    <p>If You continue to use the Platform after we have let You know that we have made changes, You agree to be bound by the modified terms. If You do not accept the changes, You should immediately stop using the Platform and delete all files associated with the Platform on Your mobile device.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Label} 
                                    variant="link" eventKey="6">
                                    Can I delete my account?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                    <p>If You breach any of these terms, we may suspend or disable Your account or terminate Your access to the Platform without prior notice to You. There may be other instances where We may need to terminate Your access to the Platform that are not related to any of Your actions or inactions. We reserve the right to terminate Your access to and use of the Platform and materials at any time, with or without cause.</p>
                                    <p>If You wish to terminate Your account, please contact KWOKMAN at support@KWOKMAN.com, immediately discontinue Your use of the Platform, and delete all files associated with the Platform from Your computer.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
        
    );
};

export default Home;