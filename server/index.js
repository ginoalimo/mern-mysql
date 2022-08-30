import express from "express";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, "../client/dist")));

app.listen();
console.log(`Server is running`);
