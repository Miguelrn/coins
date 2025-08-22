import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCoinTable1755883369636 implements MigrationInterface {
    name = 'CreateCoinTable1755883369636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "king" character varying NOT NULL, "country" character varying NOT NULL, "year" integer NOT NULL, CONSTRAINT "PK_650993fc71b789e4793b62fbcac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "coin"`);
    }

}
