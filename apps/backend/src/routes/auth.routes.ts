// Authentication related API routes
import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { getMe, syncUser, getRole } from "../controllers/auth.controller";
import rateLimit from "express-rate-limit";

const router = Router();

// Rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
  message: { success: false, message: "Too many requests" },
});

router.use(authLimiter);

// All routes below need valid JWT
router.use(requireAuth);

// Sync user (any authenticated user)
router.post("/sync", syncUser);

// Get current user (any role)
router.get("/me", requireRole(["BUSINESS", "INSTITUTION"]), getMe);

// Get role
router.get("/role", requireRole(["BUSINESS", "INSTITUTION"]), getRole);

export default router;