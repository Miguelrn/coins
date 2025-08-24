import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Coin } from './entities/Coin.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Coin],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
});