import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673033605007 implements MigrationInterface {
    name = 'default1673033605007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userID" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL DEFAULT now(), "sexualOrientation" character varying NOT NULL, "email" character varying NOT NULL, "lastEmail" character varying NOT NULL, "fone" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adms" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL DEFAULT now(), "sexualOrientation" character varying NOT NULL, "email" character varying NOT NULL, "lastEmail" character varying NOT NULL, "fone" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "Password" integer NOT NULL, CONSTRAINT "PK_d44a274a5cc87c565f3d4de3b79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_0a8c79bd1ad4e0dff867b2f6b8b" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_0a8c79bd1ad4e0dff867b2f6b8b"`);
        await queryRunner.query(`DROP TABLE "adms"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
