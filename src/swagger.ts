
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";


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
    apis: [path.join(__dirname, "./*.js")],
}


const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec