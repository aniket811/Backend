//dont use this file now

import express from "express";

import { signup, login } from "../controllers/clerk_auth.js";

const router = express.Router();

router.post("/clerksignup", signup);
router.post("/login", login);

export default router;
