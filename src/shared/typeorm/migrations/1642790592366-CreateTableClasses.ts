import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableClasses1642790592366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'video',
            type: 'varchar',
          },
          {
            name: 'data_init',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'data_end',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'date_created',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'date_updated',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'total_comments',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classes');
  }
}
