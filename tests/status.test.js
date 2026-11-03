const request = require("supertest");
const app = require("../src/app");

describe("Application Status API", () => {

    test("Should return running status", async () => {

        const response = await request(app)
            .get("/api/status");

        expect(response.statusCode).toBe(200);

        expect(response.body.status).toBe("running");

        expect(response.body.uptime).toBeGreaterThanOrEqual(0);

        expect(response.body.nodeVersion).toBe(process.version);
    });

});