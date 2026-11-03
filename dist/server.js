var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// src/controllers/health.controller.js
var require_health_controller = __commonJS({
  "src/controllers/health.controller.js"(exports2, module2) {
    var getHealth = (req, res) => {
      res.status(200).json({
        success: true,
        message: "Application is healthy",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    };
    module2.exports = { getHealth };
  }
});

// src/controllers/info.controller.js
var require_info_controller = __commonJS({
  "src/controllers/info.controller.js"(exports2, module2) {
    var getInfo = (req, res) => {
      res.status(200).json({
        success: true,
        application: "DevOps CI/CD Management API",
        version: "1.0.0",
        description: "Node.js application deployed using Azure CI/CD",
        environment: process.env.NODE_ENV || "development"
      });
    };
    module2.exports = { getInfo };
  }
});

// src/controllers/status.controller.js
var require_status_controller = __commonJS({
  "src/controllers/status.controller.js"(exports2, module2) {
    var getStatus = (req, res) => {
      res.status(200).json({
        success: true,
        status: "running",
        uptime: process.uptime(),
        nodeVersion: process.version,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    };
    module2.exports = { getStatus };
  }
});

// src/routes/api.routes.js
var require_api_routes = __commonJS({
  "src/routes/api.routes.js"(exports2, module2) {
    var express = require("express");
    var { getHealth } = require_health_controller();
    var { getInfo } = require_info_controller();
    var { getStatus } = require_status_controller();
    var router = express.Router();
    router.get("/health", getHealth);
    router.get("/info", getInfo);
    router.get("/status", getStatus);
    module2.exports = router;
  }
});

// src/middleware/error.middleware.js
var require_error_middleware = __commonJS({
  "src/middleware/error.middleware.js"(exports2, module2) {
    var notFound = (req, res) => {
      res.status(404).json({
        success: false,
        message: "Route not found"
      });
    };
    var errorHandler = (err, req, res, next) => {
      console.error(err.message);
      res.status(err.status || 500).json({
        success: false,
        message: err.status ? err.message : "Internal server error"
      });
    };
    module2.exports = { notFound, errorHandler };
  }
});

// src/app.js
var require_app = __commonJS({
  "src/app.js"(exports2, module2) {
    var express = require("express");
    var apiRoutes = require_api_routes();
    var { notFound, errorHandler } = require_error_middleware();
    var app2 = express();
    app2.use(express.json());
    app2.use("/api", apiRoutes);
    app2.use(notFound);
    app2.use(errorHandler);
    module2.exports = app2;
  }
});

// src/server.js
var app = require_app();
var PORT = process.env.PORT || 3e3;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;
