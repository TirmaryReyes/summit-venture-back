import app from "./app";

describe("Given an app", () => {
  describe("When it receives a text say 'Hello world'", () => {
    test("Then it should contain 'Hello world'", () => {
      expect(app).toBe("Hello world");
    });
  });
});
