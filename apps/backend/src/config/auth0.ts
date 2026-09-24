import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const issuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;

if (!audience || !issuerBaseURL) {
  throw new Error("Missing AUTH0_AUDIENCE or AUTH0_ISSUER_BASE_URL in .env");
}

export const checkJwt = auth({
  audience,
  issuerBaseURL,
  tokenSigningAlg: "RS256",
});