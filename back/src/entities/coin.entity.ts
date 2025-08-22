import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Coin {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  king!: string;

  @Field()
  @Column()
  country!: string;

  @Field()
  @Column()
  year!: number;
}