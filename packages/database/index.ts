import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma };

export * from "@prisma/client";
