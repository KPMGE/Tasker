import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateList1643453462375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "lists",
        columns: [
          {
            name: "id",
            type: "uuid",
            isUnique: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "color",
            type: "varchar",
          },
          {
            name: "task_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_task_id",
            columnNames: ["task_id"],
            referencedTableName: "tasks",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("lists");
  }
}
