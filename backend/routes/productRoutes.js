const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductDetails, productApproval, productAvailable, getAdminProduct, getProducts, createProductReview, getProductReviews, deleteReview, getProductsCreatedByUser } = require('../controllers/productController');



router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin", "seller"), createProduct);
router.route("/products").get(getAllProducts);
router.route('/products/all').get(getProducts);
router.route("/admin/products").get(getAdminProduct);
router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route("/admin/approve/:id").put(isAuthenticatedUser, authorizeRoles("admin"), productApproval);
router.route("/admin/available/:id").put(isAuthenticatedUser, authorizeRoles("admin"), productAvailable);
router.route("/product/:id").get(getProductDetails);
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/admin/reviews').get(getProductReviews).delete(isAuthenticatedUser, deleteReview);
router.route('/seller/getallproducts').get(isAuthenticatedUser, authorizeRoles("seller"), getProductsCreatedByUser);


module.exports = router