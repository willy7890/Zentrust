import { Request, Response } from "express";
import prisma from "../config/database";

// GET /api/auth/me
export const getMe = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    return res.json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// POST /api/auth/sync
export const syncUser = async (req: Request, res: Response) => {
  try {
    const auth0Id = (req as any).auth?.payload?.sub;
    const email = (req as any).auth?.payload?.email;
    const name = (req as any).auth?.payload?.name;
    const picture = (req as any).auth?.payload?.picture;

    // Role inatoka kwenye body (business au institution)
    const { role } = req.body;

    if (!role || !["BUSINESS", "INSTITUTION"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Role is required and must be BUSINESS or INSTITUTION",
      });
    }

    if (!auth0Id || !email) {
      return res.status(400).json({
        success: false,
        message: "Invalid token data",
      });
    }

    // Create au Update user
    const user = await prisma.user.upsert({
      where: { auth0Id },
      update: {
        email,
        name,
        picture,
        role,
      },
      create: {
        auth0Id,
        email,
        name,
        picture,
        role,
      },
    });

    return res.json({
      success: true,
      message: "User synced successfully",
      data: user,
    });
  } catch (error) {
    console.error("Sync error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to sync user",
    });
  }
};

// GET /api/auth/role
export const getRole = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    return res.json({
      success: true,
      role: user.role,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};