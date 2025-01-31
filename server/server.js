import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./dbConnection.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Hiking Trails API!" });
});

app.get("/trails", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM trails");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/add-trails", async (req, res) => {
  const newData = req.body;
  try {
    const query = await db.query(
      `INSERT INTO trails (name, location, difficulty, description) VALUES($1, $2, $3, $4);`,
      [newData.name, newData.location, newData.difficulty, newData.description]
    );
    res.json({ message: "Data sent to the database!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/update-trails/:id", async (req, res) => {
  const updateData = req.body;
  const newParamsData = req.params;
  try {
    const query = await db.query(
      `UPDATE trails SET name = $1, location = $2, difficulty = $3, description = $4 WHERE id = $5;`,
      [
        updateData.name,
        updateData.location,
        updateData.difficulty,
        updateData.description,
        newParamsData.id,
      ]
    );
    res.json({ message: "Data updated in the database!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/delete-trails/:id", async (req, res) => {
  const deleteData = req.params;
  try {
    const query = await db.query(`DELETE FROM trails WHERE id = $1;`, [
      deleteData.id,
    ]);
    res.json({ message: "Data deleted from the database!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
