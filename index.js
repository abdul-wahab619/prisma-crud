import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // for single user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "wahab",
  //       email: "wahab@gmail.com",
  //     },
  //   });

  // for many users
  //   const users = await prisma.user.createMany({
  //     data: [
  //       { name: "Wahab", email: "wahab1@gmail.com" },
  //       { name: "Ali", email: "ali@gmail.com" },
  //       { name: "Ahmed", email: "ahmed@gmail.com" },
  //     ],
  //   });
  //   console.log("Users created:", users);

  //   // read users data
  //   const readUsers = await prisma.user.findMany();

  //   console.log("Users: ", readUsers);

  //   // read single data
  //   const oneUser = await prisma.user.findUnique({
  //     where: { id: 6 },
  //   });
  //   console.log("Users: ", oneUser);

  // update data
  //   const updateUser = await prisma.user.update({
  //     where: { id: 6 },
  //     data: { name: "Ali Raza" },
  //   });
  //   console.log("Users: ", updateUser);

  // delete data
  const deleteUser = await prisma.user.delete({
    where: { id: 6 },
  });
  console.log("Users: ", deleteUser);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
