const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    company: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        required: [true, 'Testimonial content is required']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    avatar: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
