import express from "express";
import cors from "cors";
import { calculateFlames } from "./flamesLogic.js";
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());
//CORS - for connecting with frontend
app.use(cors());

// main Route
app.post("/flames", (req, res) => {
  console.log(req.body);
  let { person1, person2 } = req.body;

  if (
    typeof person1 !== "string" ||
    typeof person2 !== "string" ||
    !person1.trim() ||
    !person2.trim()
  ) {
    return res
      .status(400)
      .json({ error: "Both names must be valid non-empty strings." });
  }

  const result = calculateFlames(person1, person2);

  res.json({
    person1,
    person2,
    result,
  });
});

// extra ;)
app.get("/", (req, res) => {
  res.send("🔥 FLAMES API is live! Use POST /flames");
});

// Start Server
app.listen(port, () => {
  console.log(`FLAMES API running at http://localhost:${port}`);
});
