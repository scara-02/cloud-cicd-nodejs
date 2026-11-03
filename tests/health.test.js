const request = require("supertest");
const app = require("../src/app");

describe("Health API", () => {

    test("Should return 200 when application is healthy", async () => {

        const response = await request(app)
            .get("/api/health");

        expect(response.statusCode).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.message)
            .toBe("Application is healthy");

        expect(response.body.timestamp).toBeDefined();
    });

});