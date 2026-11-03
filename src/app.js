const express = require("express");

const apiRoutes = require("./routes/api.routes");

const { notFound, errorHandler } = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

// API routes
app.use("/api", apiRoutes);

// Handle invalid routes
app.use(notFound);

// Global error handler
app.use(errorHandler);

module.exports = app;