const express = require('express');
const { applySeller, getAllApplications, getApplicationDetails, applicationStatusUpdate } = require('../controllers/sellerController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const  router = express.Router();


router.route('/apply-seller').post(applySeller);
router.route('/admin/get-applications').get(isAuthenticatedUser, authorizeRoles("admin"), getAllApplications);
router.route('/admin/application/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getApplicationDetails).put(isAuthenticatedUser, authorizeRoles("admin"), applicationStatusUpdate)

module.exports = router