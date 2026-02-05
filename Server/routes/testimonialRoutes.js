const express = require('express');
const router = express.Router();
const {
    getAllTestimonials,
    getTestimonial,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
} = require('../controllers/testimonialController');

router.route('/')
    .get(getAllTestimonials)
    .post(createTestimonial);

router.route('/:id')
    .get(getTestimonial)
    .put(updateTestimonial)
    .delete(deleteTestimonial);

module.exports = router;
