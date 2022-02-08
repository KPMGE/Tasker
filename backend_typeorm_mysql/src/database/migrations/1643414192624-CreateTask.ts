import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class CreateTask1643414192624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "color",
            type: "varchar",
          },
          {
            name: "due",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "list_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_list_id",
            columnNames: ["list_id"],
            referencedTableName: "lists",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("tasks");
  }
}
