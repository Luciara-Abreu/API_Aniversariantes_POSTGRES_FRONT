import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675288823109 implements MigrationInterface {
    name = 'default1675288823109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "avatars" ADD "avatar" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "avatars" ADD "avatar" character varying NOT NULL`);
    }

}
