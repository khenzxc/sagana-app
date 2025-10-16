import express from "express";
import { getNonce, verifySignature } from "../controllers/authController.js";

const router = express.Router();

router.get("/nonce/:address", getNonce);
router.post("/verify", verifySignature);

export default router;
