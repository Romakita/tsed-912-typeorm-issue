import { PlatformTest } from "@tsed/common";
import * as SuperTest from "supertest";
import { VenuesController } from "./VenuesController";
import { Server } from "../../Server";

describe("VenuesController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [VenuesController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /venues", async () => {
     const response = await request.get("/venues").expect(200);

     expect(response.text).toEqual("hello");
  });
});
