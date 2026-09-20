// Database connection setup using Supabase / PostgreSQL
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;