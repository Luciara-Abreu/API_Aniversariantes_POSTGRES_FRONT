import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675285391009 implements MigrationInterface {
    name = 'default1675285391009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" RENAME COLUMN "userAvatar" TO "avatar"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" RENAME COLUMN "avatar" TO "userAvatar"`);
    }

}
