import { PrismaClient } from '@prisma/client';

declare const global: typeof globalThis & { prisma?: PrismaClient }

let prisma: PrismaClient

if (process.env.NODE_ENV === 'development') {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
} else {
  prisma = new PrismaClient()
}

export { prisma }
