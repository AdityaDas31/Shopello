const express = require('express');
const { registerUser, loginUser, logout, getUserProfile, updatePassword, userOtpSend, userOtpLogin, subscribe, getAllUsers } = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/sendotp").post(userOtpSend);
router.route("/otplogin").post(userOtpLogin);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticatedUser, getUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/subscribe").post(subscribe);
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);



module.exports = router;