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
}

const defaultObject: ValueTypes = {
  lists: null,
  loading: false,
  error: false,
  tasks: null,
};

export const ListContext = createContext<ValueTypes>(defaultObject);

export const ListsProvider: React.FC<Props> = ({ children }) => {
  const [lists, setLists] = useState<ListType[]>([]);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

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
    <ListContext.Provider value={{ lists, loading, error, tasks }}>
      {children}
    </ListContext.Provider>
  );
};
