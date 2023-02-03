import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675456150520 implements MigrationInterface {
    name = 'default1675456150520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admTokens" ("id" SERIAL NOT NULL, "token" uuid NOT NULL DEFAULT uuid_generate_v4(), "userID" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b11877e22c5e81ff1d03d8e7a1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "admTokens" ADD CONSTRAINT "FK_64e8c3c377a7857e1c20888fc28" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admTokens" DROP CONSTRAINT "FK_64e8c3c377a7857e1c20888fc28"`);
        await queryRunner.query(`DROP TABLE "admTokens"`);
    }

}
