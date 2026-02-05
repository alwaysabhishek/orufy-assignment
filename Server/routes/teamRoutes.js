const express = require('express');
const router = express.Router();
const {
    getAllTeamMembers,
    getTeamMember,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
} = require('../controllers/teamController');

router.route('/')
    .get(getAllTeamMembers)
    .post(createTeamMember);

router.route('/:id')
    .get(getTeamMember)
    .put(updateTeamMember)
    .delete(deleteTeamMember);

module.exports = router;
