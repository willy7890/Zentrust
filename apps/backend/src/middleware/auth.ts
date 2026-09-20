// Verifies Auth0 JWT tokens on protected routes
import { Request, Response, NextFunction } from "express";
import { checkJwt } from "../config/auth0";

// Hii middleware inaverify token kutoka Auth0
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  checkJwt(req, res, (err) => {
    if (err) {
      console.log("Auth failed:", err.message);
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid or missing token",
      });
    }
    next();
  });
};