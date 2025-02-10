import express from "express";
import {
  getHome,
  createShortUrl,
  redirectUrl,
} from "../controllers/urlController.js";

const router = express.Router();

router.get("/", getHome);
router.post("/shorten", createShortUrl);
router.get("/:short", redirectUrl);

export default router;
