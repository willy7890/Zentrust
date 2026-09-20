import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Zentrust API",
    version: "1.0.0",
    description: "Zentrust Backend API - Authentication with Auth0",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local development",
    },
  ],
  tags: [
    {
      name: "Auth",
      description: "Authentication endpoints (Auth0)",
    },
  ],
  paths: {
    "/": {
      get: {
        tags: ["Health"],
        summary: "Health Check",
        responses: {
          "200": {
            description: "API is running",
          },
        },
      },
    },
    "/api/auth/sync": {
      post: {
        tags: ["Auth"],
        summary: "Sync Auth0 user with database",
        description: "Creates or updates user in our database. Requires JWT + role in body.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["role"],
                properties: {
                  role: {
                    type: "string",
                    enum: ["BUSINESS", "INSTITUTION"],
                    example: "BUSINESS",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": { description: "User synced successfully" },
          "400": { description: "Invalid role" },
          "401": { description: "Unauthorized" },
        },
      },
    },
    "/api/auth/me": {
      get: {
        tags: ["Auth"],
        summary: "Get current authenticated user",
        security: [{ bearerAuth: [] }],
        responses: {
          "200": { description: "Returns user data + role" },
          "401": { description: "Unauthorized" },
          "403": { description: "Forbidden" },
        },
      },
    },
    "/api/auth/role": {
      get: {
        tags: ["Auth"],
        summary: "Get current user role",
        security: [{ bearerAuth: [] }],
        responses: {
          "200": { description: "Returns the user role" },
          "401": { description: "Unauthorized" },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Zentrust API is running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

export default app;