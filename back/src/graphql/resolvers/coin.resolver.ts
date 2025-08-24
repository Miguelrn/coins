import { Query, Resolver, Args } from '@nestjs/graphql';
import { Coin } from '../../entities/Coin.entity';
import { UUID } from 'crypto';
import DataSource from "../../data-source";


@Resolver()
export class CoinResolver {
  @Query(() => Coin, { nullable: true })
  async getCoin(@Args("id") id: UUID): Promise<Coin | null> {
    const coinRepo = DataSource.getRepository(Coin);
    return await coinRepo.findOne({
      where: { id },
    });
  }
}