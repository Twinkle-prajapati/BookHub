import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar1 from './Navbar1'; // Assuming you have a custom Navbar component

const AboutUsPage = () => {
    return (
        <>
            <Navbar1 /> {/* Your custom Navbar component */}
            <header className="bg-dark text-white py-5">
                <Container>
                    <h1 className="display-4">About Us</h1>
                    <p className="lead">Learn more about our mission and what we do.</p>
                </Container>
            </header>
            <main className="py-5">
                <Container>
                <Row>
                        <Col md={6}>
                            <h2>Our Mission</h2>
                            <p className="lead">At BOOKHUB, our mission is to empower readers and book enthusiasts worldwide by providing access to a vast collection of literature.</p>
                            <p>We strive to enhance reading experiences through innovative technology and curated content. Our team is dedicated to delivering personalized book recommendations, insightful reviews, and fostering a vibrant community of readers.</p>
                        </Col>
                        <Col md={6}>
                            <h2>What We Do</h2>
                            <p className="lead">We specialize in connecting readers with their next great read:</p>
                            <ul>
                                <li>Curate a diverse library of books across genres and topics.</li>
                                <li>Provide real-time book recommendations based on user preferences.</li>
                                <li>Offer detailed book summaries, author bios, and reader reviews.</li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </main>
            <footer className="bg-dark text-white py-4 mt-5">
                <Container>
                    <p className="text-center">&copy; 2024 Your Company. All rights reserved.</p>
                </Container>
            </footer>
        </>
    );
};

export default AboutUsPage;
