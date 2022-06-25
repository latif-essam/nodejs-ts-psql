import supertest from "supertest";
import app from "./../../server";

const req = supertest(app);

describe("Node-TS-PSQL", async () => {
  it("should get resposne when the server entry point: / ", async () => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
  });
});
