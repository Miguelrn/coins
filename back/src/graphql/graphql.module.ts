import { Module } from '@nestjs/common';
import { CoinResolver } from './resolvers/coin.resolver';

@Module({
  providers: [CoinResolver],
})
export class GraphqlModule {}