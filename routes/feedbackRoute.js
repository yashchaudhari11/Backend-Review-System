import {
  createAdmin,
  createAlummi,
  createStudent,
  getAllUsers,
} from "../controllers/userController.js";

import {createReview,getAllReviews}from '../controllers/reviewController.js'

import {createCompany,getAllCompany} from '../controllers/companyController.js'
import { likeReviews } from "../controllers/likeController.js";
import express from "express";
import { isAdmin } from "../middleWare/middleWare.js";

const router = express.Router();

router.post("/admin/create", createAdmin);
router.post("/alumni/create", createAlummi);
router.post("/student/create", createStudent);
router.post("/company/create", createCompany);
router.post("/review/create", createReview);
router.post("/likes/add", likeReviews);

router.get("/getuser/get", getAllUsers);
router.get("/getcompany/get", getAllCompany);
router.get("/getreview/create", getAllReviews);

export default router;
