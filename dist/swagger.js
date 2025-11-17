"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const apiPaths = process.env.NODE_ENV === "production" ? ["./dist/routes/**/*.js"] : ["./src/routes/**/*.ts"];
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "api",
            version: "1.0.0",
            description: "A sample API with swagger documentation"
        },
        servers: [{ url: process.env.NODE_ENV === "production" ? "https://pincode-lookup-api.onrender.com" : "http://localhost:3000/api/v1" }]
    },
    apis: [path_1.default.join(__dirname, "./*.js")],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
