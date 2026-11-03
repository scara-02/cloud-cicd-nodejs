const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
};

const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.status ? err.message : "Internal server error"
    });
};

module.exports = { notFound, errorHandler };