import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675777113981 implements MigrationInterface {
    name = 'default1675777113981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admTokens" DROP CONSTRAINT "FK_64e8c3c377a7857e1c20888fc28"`);
        await queryRunner.query(`ALTER TABLE "admTokens" DROP COLUMN "userID"`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD "admID" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "admTokens" DROP CONSTRAINT "PK_b11877e22c5e81ff1d03d8e7a1a"`);
        await queryRunner.query(`ALTER TABLE "admTokens" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD CONSTRAINT "PK_b11877e22c5e81ff1d03d8e7a1a" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admTokens" DROP CONSTRAINT "PK_b11877e22c5e81ff1d03d8e7a1a"`);
        await queryRunner.query(`ALTER TABLE "admTokens" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD CONSTRAINT "PK_b11877e22c5e81ff1d03d8e7a1a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "admTokens" DROP COLUMN "admID"`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD "userID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD CONSTRAINT "FK_64e8c3c377a7857e1c20888fc28" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
