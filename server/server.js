const express = require('express');

// const  bodyParser = require("body-parser");
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "LogRocket Express API with Swagger",
//         version: "0.1.0",
//         description:
//           "This is a simple CRUD API application made with Express and documented with Swagger",
//         license: {
//           name: "MIT",
//           url: "https://spdx.org/licenses/MIT.html",
//         },
//         contact: {
//           name: "LogRocket",
//           url: "https://logrocket.com",
//           email: "info@email.com",
//         },
//       },
//       servers: [
//         {
//           url: "http://localhost:3333/books",
//         },
//       ],
//     },
//     apis: ["./route/*.js"],
//   };
  
  // const specs = swaggerJsdoc(options);
  // app.use(
  //   "/api-docs",
  //   swaggerUi.serve,
  //   swaggerUi.setup(specs)
  // );

const app = express();
const booksRoute = require('./route/book/booksRoute');
const PublisherRoute = require('./route/publisher/publisherRoute');

app.use(express.json());

app.use(booksRoute);
app.use(PublisherRoute);
app.listen(3333);