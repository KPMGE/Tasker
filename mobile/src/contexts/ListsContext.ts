import { createContext } from "react";
import { ListType } from "../@types";

export const ListsContext = createContext<ListType[]>([]);
