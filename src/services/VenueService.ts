import {Inject, Service} from "@tsed/di";
import {UseConnection} from "@tsed/typeorm";
import {VenueEntity} from "../entities/VenueEntity";
import {VenueRepository} from "../repositories/VenueRepository";

@Service()
export class VenueService {
  @Inject()
  @UseConnection("default")
  private readonly venueRepository: VenueRepository;

  public async getOne(guid: string): Promise<VenueEntity | undefined> {
    return this.venueRepository.findOne(guid); // throws Cannot read property 'findOne' of undefined
  }
}