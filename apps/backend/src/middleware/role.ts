// Checks user role (Business or Institution) before allowing access
import { Request, Response, NextFunction } from "express";
import prisma from "../config/database";

export const requireRole = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      const auth0Id = (req as any).auth?.payload?.sub;

      if (!auth0Id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      
      const user = await prisma.user.findUnique({
        where: { auth0Id },
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found. Please sync first.",
        });
      }


      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden - You don't have permission",
        });
      }

      
      (req as any).user = user;
      next();
    } catch (error) {
      console.error("Role middleware error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};