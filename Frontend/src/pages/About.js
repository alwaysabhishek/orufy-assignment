import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaUsers, FaLightbulb, FaHeart, FaRocket } from 'react-icons/fa';
import { getTeamMembers } from '../services/api';
import './About.css';

const About = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await getTeamMembers();
                setTeam(response.data.data);
            } catch (error) {
                console.error('Error fetching team:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    const values = [
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
        },
        {
            icon: <FaUsers />,
            title: 'Collaboration',
            description: 'We work closely with our clients as partners, not just service providers.'
        },
        {
            icon: <FaHeart />,
            title: 'Passion',
            description: 'We are passionate about what we do and it shows in every project we deliver.'
        },
        {
            icon: <FaRocket />,
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, from code quality to customer service.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <span className="section-subtitle">About Us</span>
                        <h1 className="about-hero-title">We're a Team of Passionate Digital Creators</h1>
                        <p className="about-hero-description">
                            Founded in 2019, Orufy has been helping businesses transform their digital presence. 
                            We believe in creating solutions that not only look great but also deliver real results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-image">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" 
                                alt="Our team" 
                            />
                        </div>
                        <div className="story-text">
                            <span className="section-subtitle">Our Story</span>
                            <h2 className="section-title">From Small Beginnings to Big Dreams</h2>
                            <p>
                                What started as a small team of three developers has grown into a 
                                full-service digital agency. We've worked with startups, SMEs, and 
                                enterprise clients across various industries.
                            </p>
                            <p>
                                Our journey has been fueled by our commitment to quality and our 
                                passion for helping businesses succeed in the digital world. Every 
                                project we undertake is an opportunity to make a difference.
                            </p>
                            <div className="story-stats">
                                <div className="story-stat">
                                    <span className="stat-number">150+</span>
                                    <span className="stat-label">Projects Delivered</span>
                                </div>
                                <div className="story-stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                                <div className="story-stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Team Members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Values</span>
                        <h2 className="section-title">What Drives Us</h2>
                        <p className="section-description">
                            Our core values guide everything we do and how we work with our clients
                        </p>
                    </div>
                    <div className="grid grid-4">
                        {values.map((value, index) => (
                            <div key={index} className="value-card card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section bg-light">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Team</span>
                        <h2 className="section-title">Meet the Experts</h2>
                        <p className="section-description">
                            A talented team of professionals dedicated to your success
                        </p>
                    </div>
                    {loading ? (
                        <div className="loading"><div className="spinner"></div></div>
                    ) : (
                        <div className="grid grid-4">
                            {team.map((member) => (
                                <div key={member._id} className="team-card">
                                    <div className="team-image">
                                        <img src={member.image} alt={member.name} />
                                        <div className="team-social">
                                            {member.social?.linkedin && (
                                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedin />
                                                </a>
                                            )}
                                            {member.social?.twitter && (
                                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                                    <FaTwitter />
                                                </a>
                                            )}
                                            {member.social?.github && (
                                                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h3 className="team-name">{member.name}</h3>
                                        <p className="team-role">{member.role}</p>
                                        <p className="team-bio">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default About;
