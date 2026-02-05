import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { submitContact } from '../services/api';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Our Office',
            details: ['123 Business Street, Tech Park', 'Bangalore, Karnataka 560001', 'India']
        },
        {
            icon: <FaPhone />,
            title: 'Phone Number',
            details: ['+91 98765 43210', '+91 12345 67890']
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Address',
            details: ['hello@orufy.com', 'support@orufy.com']
        },
        {
            icon: <FaClock />,
            title: 'Working Hours',
            details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM']
        }
    ];

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);
        
        try {
            await submitContact(formData);
            toast.success('Thank you! Your message has been sent successfully.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="section-subtitle">Contact Us</span>
                        <h1 className="contact-hero-title">Get In Touch With Us</h1>
                        <p className="contact-hero-description">
                            Have a project in mind or need help with your digital presence? 
                            We'd love to hear from you. Let's start a conversation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="contact-info-title">Contact Information</h2>
                            <p className="contact-info-description">
                                Reach out to us through any of these channels or fill out the form.
                            </p>
                            <div className="contact-info-list">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="contact-info-item">
                                        <div className="contact-info-icon">{item.icon}</div>
                                        <div className="contact-info-content">
                                            <h3>{item.title}</h3>
                                            {item.details.map((detail, i) => (
                                                <p key={i}>{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2 className="contact-form-title">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`form-input ${errors.name ? 'error' : ''}`}
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <span className="error-text">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`form-input ${errors.email ? 'error' : ''}`}
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="subject">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className={`form-input ${errors.subject ? 'error' : ''}`}
                                            placeholder="What is this about?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                        {errors.subject && <span className="error-text">{errors.subject}</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                                        placeholder="Tell us about your project or inquiry..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message <FaPaperPlane />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452149498!3d12.954517008640508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704189123456!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
