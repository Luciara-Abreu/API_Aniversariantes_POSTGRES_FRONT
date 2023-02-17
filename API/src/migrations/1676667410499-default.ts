import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676667410499 implements MigrationInterface {
    name = 'default1676667410499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avatars" ("id" SERIAL NOT NULL, "avatar" text NOT NULL, "admID" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_747f50f600ea8ce4e511d01b18" UNIQUE ("admID"), CONSTRAINT "PK_224de7bae2014a1557cd9930ed7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "avatars" ADD CONSTRAINT "FK_747f50f600ea8ce4e511d01b186" FOREIGN KEY ("admID") REFERENCES "adms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" DROP CONSTRAINT "FK_747f50f600ea8ce4e511d01b186"`);
        await queryRunner.query(`DROP TABLE "avatars"`);
    }

}
