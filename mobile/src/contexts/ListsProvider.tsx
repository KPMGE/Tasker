import React, { createContext, useState, useEffect } from "react";
import { ListType, TaskType } from "../@types";
import api from "../services/api";

type Props = {
  children: JSX.Element;
};

interface ValueTypes {
  lists: ListType[] | null;
  tasks: TaskType[] | null;
  loading: boolean;
  error: boolean;
  addTask: (task: TaskType) => void;
}

const defaultObject: ValueTypes = {
  lists: null,
  loading: false,
  error: false,
  tasks: null,
  addTask: (task: TaskType) => null,
};

export const ListContext = createContext<ValueTypes>(defaultObject);

export const ListsProvider: React.FC<Props> = ({ children }) => {
  const [lists, setLists] = useState<ListType[]>([]);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const addTask = async (newTask: TaskType) => {
    const listToAdd = lists.find((list) => list._id == newTask.list_id);

    if (!listToAdd) {
      console.log("List not found!");
      return;
    }

    try {
      await api.post("tasks/new", {
        description: newTask.description,
        due: newTask.due,
        list_id: newTask.list_id,
      });

      setTasks([...tasks, newTask]);

      console.log("task saved!");
    } catch (error) {
      console.log("Error when saving task");
    }
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await api.get("/lists");

        // set fetched lists
        setLists(response.data);
        setTasks(response.data[0].tasks);

        setLoading(false);
      } catch (err) {
        console.log("Error");
        setError(true);
      }
    };

    fetchLists();
  }, []);

  return (
    <ListContext.Provider value={{ lists, loading, error, tasks, addTask }}>
      {children}
    </ListContext.Provider>
  );
};
