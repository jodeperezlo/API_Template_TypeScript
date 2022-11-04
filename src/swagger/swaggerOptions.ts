import path from "path";
import config from "../config/config";

const swaggerOptions = {
  apis: [`${path.join(__dirname, "./*.yaml")}`],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API REST Template - Typescript",
      version: "1.0.0",
      description: "API Documentation for API REST Template - Typescript",
    },
    servers: [
      {
        url: `http://${config.API_HOST}:${config.API_PORT}${config.API_URL}`,
        description: "Local Server",
      },
    ],
  },
};

export default swaggerOptions;
