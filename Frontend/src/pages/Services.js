import React, { useState, useEffect } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getServices } from '../services/api';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getServices();
                setServices(response.data.data);
            } catch (err) {
                setError('Failed to load services. Please try again later.');
                console.error('Error fetching services:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    const processSteps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'We start by understanding your business, goals, and requirements through detailed discussions.'
        },
        {
            number: '02',
            title: 'Planning',
            description: 'Our team creates a comprehensive roadmap with timelines, milestones, and deliverables.'
        },
        {
            number: '03',
            title: 'Development',
            description: 'We bring your project to life using agile methodology with regular updates and feedback.'
        },
        {
            number: '04',
            title: 'Launch & Support',
            description: 'After thorough testing, we launch your project and provide ongoing support and maintenance.'
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <span className="section-subtitle">Our Services</span>
                        <h1 className="services-hero-title">Solutions That Drive Results</h1>
                        <p className="services-hero-description">
                            We offer comprehensive digital services to help your business grow and thrive 
                            in the competitive digital landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-grid-section">
                <div className="container">
                    {loading ? (
                        <div className="loading"><div className="spinner"></div></div>
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : (
                        <div className="services-grid">
                            {services.map((service) => (
                                <div key={service._id} className="service-detail-card">
                                    <div className="service-detail-header">
                                        <div className="service-detail-icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <h3 className="service-detail-title">{service.title}</h3>
                                    </div>
                                    <p className="service-detail-description">{service.description}</p>
                                    <ul className="service-detail-features">
                                        {service.features?.map((feature, index) => (
                                            <li key={index}>
                                                <FaCheck className="feature-check" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="service-link">
                                        Get Started <FaArrowRight />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Process Section */}
            <section className="section process-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Process</span>
                        <h2 className="section-title">How We Work</h2>
                        <p className="section-description">
                            Our proven process ensures successful project delivery every time
                        </p>
                    </div>
                    <div className="process-steps">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <div className="services-cta-content">
                        <h2>Ready to Start Your Project?</h2>
                        <p>Let's discuss how we can help you achieve your goals.</p>
                        <Link to="/contact" className="btn btn-white">
                            Contact Us <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
