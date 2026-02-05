import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'design', label: 'UI/UX Design' },
        { id: 'marketing', label: 'Digital Marketing' }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data.data);
                setFilteredProjects(response.data.data);
            } catch (err) {
                setError('Failed to load projects. Please try again later.');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === category));
        }
    };

    return (
        <div className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero">
                <div className="container">
                    <div className="projects-hero-content">
                        <span className="section-subtitle">Our Portfolio</span>
                        <h1 className="projects-hero-title">Our Recent Projects</h1>
                        <p className="projects-hero-description">
                            Explore our portfolio of successful projects across various industries and technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="section projects-section">
                <div className="container">
                    <div className="projects-filter">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                onClick={() => handleFilter(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="loading"><div className="spinner"></div></div>
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : filteredProjects.length === 0 ? (
                        <div className="no-projects">
                            <p>No projects found in this category.</p>
                        </div>
                    ) : (
                        <div className="projects-grid">
                            {filteredProjects.map((project) => (
                                <div key={project._id} className="project-detail-card">
                                    <div className="project-detail-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-detail-overlay">
                                            <span className="project-detail-category">{project.category}</span>
                                            <a 
                                                href={project.link || '#'} 
                                                className="project-view-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project-detail-content">
                                        <h3 className="project-detail-title">{project.title}</h3>
                                        <p className="project-detail-description">{project.description}</p>
                                        <div className="project-detail-tech">
                                            {project.technologies?.map((tech, index) => (
                                                <span key={index} className="tech-badge">{tech}</span>
                                            ))}
                                        </div>
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

export default Projects;
