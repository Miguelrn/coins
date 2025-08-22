import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphqlModule } from './graphql/graphql.module';
import { Coin } from './entities/coin.entity';
import 'dotenv/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Coin],
      migrations: ['src/migrations/*.js'],
      synchronize: true, 
      migrationsRun: true,
    }),
    TypeOrmModule.forFeature([Coin]),
    GraphqlModule,
  ],
})
export class AppModule {}