const Team = require('../models/Team');

// Get all team members
exports.getAllTeamMembers = async (req, res) => {
    try {
        const team = await Team.find({ isActive: true }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: team.length,
            data: team
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching team members',
            error: error.message
        });
    }
};

// Get single team member
exports.getTeamMember = async (req, res) => {
    try {
        const member = await Team.findById(req.params.id);
        if (!member) {
            return res.status(404).json({
                success: false,
                message: 'Team member not found'
            });
        }
        res.status(200).json({
            success: true,
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching team member',
            error: error.message
        });
    }
};

// Create team member
exports.createTeamMember = async (req, res) => {
    try {
        const member = await Team.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Team member added successfully',
            data: member
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error adding team member',
            error: error.message
        });
    }
};

// Update team member
exports.updateTeamMember = async (req, res) => {
    try {
        const member = await Team.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!member) {
            return res.status(404).json({
                success: false,
                message: 'Team member not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Team member updated successfully',
            data: member
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating team member',
            error: error.message
        });
    }
};

// Delete team member
exports.deleteTeamMember = async (req, res) => {
    try {
        const member = await Team.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json({
                success: false,
                message: 'Team member not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Team member deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting team member',
            error: error.message
        });
    }
};
