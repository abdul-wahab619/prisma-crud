import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

// Home Page - Display URLs
export const getHome = async (req, res) => {
  try {
    const urls = await prisma.url.findMany();
    res.render("index", { urls });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// Handle URL Shortening
export const createShortUrl = async (req, res) => {
  try {
    const { original } = req.body;
    const short = nanoid(6);

    await prisma.url.create({
      data: { original, short },
    });

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating short URL");
  }
};

// Redirect to Original URL
export const redirectUrl = async (req, res) => {
  try {
    const { short } = req.params;
    const url = await prisma.url.findUnique({ where: { short } });

    if (url) {
      res.redirect(url.original);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error redirecting");
  }
};
