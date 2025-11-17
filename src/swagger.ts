
import swaggerJSDoc from "swagger-jsdoc";



const apiPaths = process.env.NODE_ENV === "production" ? ["./dist/routes/**/*.js"] : ["./dist/routes/**/*.ts"]



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
    apis: apiPaths
}


const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec