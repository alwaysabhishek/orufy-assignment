import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

console.log('API URL:', API_URL); // For debugging

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
});

// Services API
export const getServices = () => api.get('/services');
export const getService = (id) => api.get(`/services/${id}`);
export const createService = (data) => api.post('/services', data);
export const updateService = (id, data) => api.put(`/services/${id}`, data);
export const deleteService = (id) => api.delete(`/services/${id}`);

// Projects API
export const getProjects = (category) => {
    const params = category && category !== 'all' ? { category } : {};
    return api.get('/projects', { params });
};
export const getProject = (id) => api.get(`/projects/${id}`);
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Testimonials API
export const getTestimonials = () => api.get('/testimonials');
export const getTestimonial = (id) => api.get(`/testimonials/${id}`);
export const createTestimonial = (data) => api.post('/testimonials', data);
export const updateTestimonial = (id, data) => api.put(`/testimonials/${id}`, data);
export const deleteTestimonial = (id) => api.delete(`/testimonials/${id}`);

// Contact API
export const submitContact = (data) => api.post('/contacts', data);
export const getContacts = () => api.get('/contacts');

// Team API
export const getTeamMembers = () => api.get('/team');
export const getTeamMember = (id) => api.get(`/team/${id}`);
export const createTeamMember = (data) => api.post('/team', data);
export const updateTeamMember = (id, data) => api.put(`/team/${id}`, data);
export const deleteTeamMember = (id) => api.delete(`/team/${id}`);

export default api;
