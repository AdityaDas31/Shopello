const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const { createProduct } = require('../controllers/productController');



router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

module.exports = router