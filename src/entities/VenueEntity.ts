import {Property} from "@tsed/common";
import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class VenueEntity {
  @PrimaryGeneratedColumn()
  @Property()
  id: string;
}