const request = require("supertest");
const app = require("../src/app");

describe("Application Info API", () => {

    test("Should return application information", async () => {

        const response = await request(app)
            .get("/api/info");

        expect(response.statusCode).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.application)
            .toBe("DevOps CI/CD Management API");

        expect(response.body.version).toBe("1.0.1");
    });

});
