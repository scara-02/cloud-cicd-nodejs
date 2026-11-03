const express = require("express");

const { getHealth } = require("../controllers/health.controller");
const { getInfo } = require("../controllers/info.controller");
const { getStatus } = require("../controllers/status.controller");

const router = express.Router();

router.get("/health", getHealth);
router.get("/info", getInfo);
router.get("/status", getStatus);

module.exports = router;