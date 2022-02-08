import { v4 as uuid } from "uuid";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { List } from "./List";

@Entity("tasks")
export class Task {
  @PrimaryColumn({
    type: "uuid",
  })
  id: string;

  @Column()
  description: string;

  @Column({
    type: "varchar",
    length: 15,
  })
  color: string;

  @Column({
    type: "timestamp",
  })
  due: Date;

  @ManyToOne(() => List)
  @JoinColumn({ name: "list_id" })
  list: List;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
