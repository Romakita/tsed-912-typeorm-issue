import { PlatformTest } from "@tsed/common";
import { VenuesController } from "./VenuesController";

describe("VenuesController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<VenuesController>(VenuesController);
    // const instance = PlatformTest.invoke<VenuesController>(VenuesController); // get fresh instance

    expect(instance).toBeInstanceOf(VenuesController);
  });
});
