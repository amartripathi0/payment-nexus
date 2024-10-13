import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const yale = await prisma.user.upsert({
    where: { number: "2121213521" },
    update: {},
    create: {
      number: "2121213521",
      password: await bcrypt.hash("myPass", 10),
      name: "Yale",
      Balance: {
        create: {
          amount: 50000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 50000,
          token: "token__1",
          provider: "YONO Bank",
        },
      },
    },
  });
  const john = await prisma.user.upsert({
    where: { number: "2323232323" },
    update: {},
    create: {
      number: "2323232323",
      password: await bcrypt.hash("bob", 10),
      name: "John",
      Balance: {
        create: {
          amount: 2000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "token__2",
          provider: "YONO Bank",
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

