import request from "supertest";
import { app } from "../../app";

describe("Given a endpoint GET '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with status code '200' and message '🏓 Pong'", async () => {
      const res = await request(app).get("/");
      const expectStatusCode = 200;
      const expectedMessage = "🏓 Pong";

      expect(res.statusCode).toBe(expectStatusCode);
      expect(res.body).toStrictEqual({ message: expectedMessage });
    });
  });
});
