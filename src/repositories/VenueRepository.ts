import { EntityRepository, Repository } from 'typeorm';
import { VenueEntity } from '../entities/VenueEntity';

@EntityRepository(VenueEntity)
export class VenueRepository extends Repository<VenueEntity> {
  //
}