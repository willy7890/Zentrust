import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

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
  paths: {
    "/": {
      get: {
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
        summary: "Sync Auth0 user with database",
        description: "Creates or updates user in our database. Requires JWT.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
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
          "401": { description: "Unauthorized" },
        },
      },
    },
    "/api/auth/me": {
      get: {
        summary: "Get current authenticated user",
        security: [{ bearerAuth: [] }],
        responses: {
          "200": { description: "User data" },
          "401": { description: "Unauthorized" },
          "403": { description: "Forbidden" },
        },
      },
    },
    "/api/auth/role": {
      get: {
        summary: "Get current user role",
        security: [{ bearerAuth: [] }],
        responses: {
          "200": { description: "User role" },
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

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "Ok",
    message: "Zentrust API is running",
  });
});

// Auth routes
app.use("/api/auth", authRoutes);

export default app;