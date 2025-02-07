# Prisma with MySQL - CRUD Operations

## Introduction
Prisma is a modern database toolkit that simplifies database access with an intuitive ORM. This guide covers setting up Prisma with MySQL and performing CRUD (Create, Read, Update, Delete) operations.

## Prerequisites
- Node.js installed
- MySQL installed and running
- A MySQL database created

## Setup Prisma with MySQL

### 1. Initialize a Node.js Project
```sh
mkdir prisma-mysql-crud
cd prisma-mysql-crud
npm init -y
```

### 2. Install Prisma and MySQL Client
```sh
npm install @prisma/client
npm install --save-dev prisma
```

### 3. Initialize Prisma
```sh
npx prisma init
```
This creates a `prisma` folder and a `.env` file for database configuration.

### 4. Configure MySQL Database
Edit `.env` file:
```env
DATABASE_URL="mysql://user:password@localhost:3306/dbname"
```
Replace `user`, `password`, and `dbname` with your actual database credentials.

### 5. Define the Prisma Schema
Edit `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

### 6. Migrate the Database
Run the migration command:
```sh
npx prisma migrate dev --name init
```

## CRUD Operations

### 1. Connect to Prisma Client
Create a file `prismaClient.js`:
```javascript
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;
```

### 2. Create a User
```javascript
const user = await prisma.user.create({
  data: {
    name: "John Doe",
    email: "john@example.com",
  },
});
console.log(user);
```

### 3. Read Users
```javascript
const users = await prisma.user.findMany();
console.log(users);
```

### 4. Update a User
```javascript
const updatedUser = await prisma.user.update({
  where: { email: "john@example.com" },
  data: { name: "John Updated" },
});
console.log(updatedUser);
```

### 5. Delete a User
```javascript
const deletedUser = await prisma.user.delete({
  where: { email: "john@example.com" },
});
console.log(deletedUser);
```

## Conclusion
This guide covered setting up Prisma with MySQL and performing CRUD operations. Prisma makes database management easier with an intuitive API and type safety.

