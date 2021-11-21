export type TaskType = {
  _id: string;
  description: string;
  color: string;
  due: Date;
  list_id: string;
};

export type ListType = {
  _id: string;
  title: string;
  color: string;
  tasks: TaskType[];
};
