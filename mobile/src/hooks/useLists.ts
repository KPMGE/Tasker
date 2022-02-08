import { useContext } from "react";

import { ListContext } from "../contexts/ListsProvider";

export const useLists = () => useContext(ListContext);
