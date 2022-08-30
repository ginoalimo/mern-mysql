import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
})

router.get("/ping", async (req, res) => {
  const [rows]= await pool.query("SELECT 1 + 1 as result");
  console.log(rows);
  res.json(rows);
});

export default router;
