const getStatus = (req, res) => {
    res.status(200).json({
        success: true,
        status: "running",
        uptime: process.uptime(),
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
    });
};

module.exports = { getStatus };