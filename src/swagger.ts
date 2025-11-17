
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";


const apiPaths = process.env.NODE_ENV === "production" ? [path.join(__dirname, "./routes/**/*.js")] : ["./src/routes/**/*.ts"]



const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "api",
            version: "1.0.0",
            description: "A sample API with swagger documentation"
        },
        servers: [{ url: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_API : "http://localhost:3000/api/v1" }]
    },
    apis: apiPaths,
}


const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec