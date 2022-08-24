import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Import routes
// import projectRoutes from "./routes/projects.routes.js";
// import taskRoutes from "./routes/tasks.routes.js";
import coberturaRoutes from "./routes/cobertura.routes.js";


// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    methods: ['GET', 'POST']
}))

// Routes
// app.use("/api/projects", projectRoutes);
// app.use("/api/tasks", taskRoutes);
app.use("/api/cobertura", coberturaRoutes);

export default app;
