import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default prisma;

module.exports = new PrismaClient({
  datasources: {
    db: {
      url: 'libsql://pruebaturso-arommel296.turso.io',
      // secret: 'your-secret-key',
    },
  },
});