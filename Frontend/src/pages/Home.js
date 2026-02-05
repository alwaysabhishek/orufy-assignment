import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';
import { getServices, getProjects, getTestimonials } from '../services/api';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [servicesRes, projectsRes, testimonialsRes] = await Promise.all([
                    getServices(),
                    getProjects(),
                    getTestimonials()
                ]);
                setServices(servicesRes.data.data.slice(0, 3));
                setProjects(projectsRes.data.data.slice(0, 3));
                setTestimonials(testimonialsRes.data.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <span className="hero-badge">Welcome to Orufy</span>
                            <h1 className="hero-title">
                                We Build Digital 
                                <span className="highlight"> Solutions</span> 
                                {' '}For Your Business
                            </h1>
                            <p className="hero-description">
                                Transform your ideas into reality with our expert team of developers, 
                                designers, and digital strategists. We create innovative solutions 
                                that drive growth.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/contact" className="btn btn-primary">
                                    Get Started <FaArrowRight />
                                </Link>
                                <Link to="/projects" className="btn btn-secondary">
                                    View Our Work
                                </Link>
                            </div>
                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-number">150+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img 
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" 
                                alt="Team working" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">What We Do</span>
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description">
                            We offer a wide range of digital services to help your business thrive
                        </p>
                    </div>
                    {loading ? (
                        <div className="loading"><div className="spinner"></div></div>
                    ) : (
                        <div className="grid grid-3">
                            {services.map((service) => (
                                <div key={service._id} className="service-card card">
                                    <div className="service-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <ul className="service-features">
                                        {service.features?.slice(0, 3).map((feature, index) => (
                                            <li key={index}>
                                                <FaCheck /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="section-cta">
                        <Link to="/services" className="btn btn-primary">
                            View All Services <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section className="section projects-preview bg-light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Portfolio</span>
                        <h2 className="section-title">Recent Projects</h2>
                        <p className="section-description">
                            Check out some of our latest work and success stories
                        </p>
                    </div>
                    {loading ? (
                        <div className="loading"><div className="spinner"></div></div>
                    ) : (
                        <div className="grid grid-3">
                            {projects.map((project) => (
                                <div key={project._id} className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                            <span className="project-category">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            {project.technologies?.slice(0, 3).map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="section-cta">
                        <Link to="/projects" className="btn btn-primary">
                            View All Projects <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Testimonials</span>
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-description">
                            Don't just take our word for it - hear from our satisfied clients
                        </p>
                    </div>
                    {loading ? (
                        <div className="loading"><div className="spinner"></div></div>
                    ) : (
                        <div className="grid grid-3">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial._id} className="testimonial-card card">
                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p className="testimonial-content">"{testimonial.content}"</p>
                                    <div className="testimonial-author">
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name}
                                            className="testimonial-avatar"
                                        />
                                        <div className="testimonial-info">
                                            <h4 className="testimonial-name">{testimonial.name}</h4>
                                            <p className="testimonial-role">
                                                {testimonial.role} at {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Project?</h2>
                        <p className="cta-description">
                            Let's work together to bring your ideas to life. Contact us today for a free consultation.
                        </p>
                        <Link to="/contact" className="btn btn-white">
                            Get In Touch <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
