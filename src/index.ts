import express from "express";
import cors from "cors";
import { rateLimit } from 'express-rate-limit'
import { connectDB } from "./config/db";
import { getEnvVariable } from "./utils/helpers";
import cookieParser from "cookie-parser";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger"

const app = express();
const PORT = process.env.PORT || 3000;

// Connect Database
// connectDB();

// Middlewares
app.use(cors({
  origin: [
    getEnvVariable('FRONT_END_URL')
  ],
  credentials: true,
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 60,
  message: {
    status: 209,
    message: "Too many request, Please try again later",
    details: "You have exceeded the rate limit for this API. Please wait and try again"
  },
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  ipv6Subnet: 56,

})

app.use(limiter)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Root 
app.get("/", async (_req, res) => {
  res.send("Hai there, API is running...");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.use("/api/v1", router)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
