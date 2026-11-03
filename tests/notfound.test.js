const request = require("supertest");
const app = require("../src/app");

describe("404 Error Handling", () => {

    test("Should return 404 for an invalid endpoint", async () => {

        const response = await request(app)
            .get("/api/invalid");

        expect(response.statusCode).toBe(404);

        expect(response.body.success).toBe(false);

        expect(response.body.message).toBe("Route not found");
    });

});