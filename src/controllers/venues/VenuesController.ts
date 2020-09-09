import {Controller, Get, Inject, PathParams, Returns} from "@tsed/common";
import {VenueEntity} from "../../entities/VenueEntity";
import {VenueService} from "../../services/VenueService";

@Controller("/venues")
export class VenuesController {
  @Inject()
  service: VenueService;

  @Get("/:id")
  @Returns(VenueEntity)
  get(@PathParams("id") guid: string) {
    return this.service.getOne(guid);
  }
}
