const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Project title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Project description is required']
    },
    image: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'design', 'marketing']
    },
    technologies: [{
        type: String
    }],
    link: {
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

module.exports = mongoose.model('Project', projectSchema);
