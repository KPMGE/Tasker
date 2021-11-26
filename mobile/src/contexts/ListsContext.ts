import { createContext } from "react";
import { ListType } from "../@types";

export const ListContext = createContext<ListType[]>([]);
