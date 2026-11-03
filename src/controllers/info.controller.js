const getInfo = (req, res) => {
    res.status(200).json({
        success: true,
        application: "DevOps CI/CD Management API",
        version: "1.0.0",
        description: "Node.js application updated through automated CI/CD pipeline",
        environment: process.env.NODE_ENV || "development"
    });
};

module.exports = { getInfo };
