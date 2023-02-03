import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675287498668 implements MigrationInterface {
    name = 'default1675287498668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "avatars" ADD "avatar" bytea NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatars" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "avatars" ADD "avatar" text NOT NULL`);
    }

}
