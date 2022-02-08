import { v4 as uuid } from "uuid";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Task } from "./Task";

@Entity()
export class List {
  @PrimaryColumn()
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column()
  color: string;

  @OneToMany(() => Task, (task) => task.list)
  tasks: Task[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
