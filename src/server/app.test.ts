import request from "supertest";
import { app } from "./app";

describe("Given a GET '/' endpoint", () => {
  describe("When it receives a response", () => {
    test("The it should response with a status 200 and '🏓 Pong' message", async () => {
      const expectedStatus = 200;
      const expectedMessage = "🏓 Pong";

      const response = await request(app).get("/").expect(expectedStatus);

      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
