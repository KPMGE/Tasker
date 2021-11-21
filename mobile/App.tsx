import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/pages/Home";
import { AddTask } from "./src/pages/AddTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListsContext } from "./src/contexts/ListsContext";
import api from "./src/services/api";

import { ListType } from "./src/@types";

const Stack = createNativeStackNavigator();

export default function App() {
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      const response = await api.get("/lists");
      setLists(response.data);
      console.log(response.data[0]._id);
    };

    fetchLists();
  }, [lists]);

  return (
    <ListsContext.Provider value={lists}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTask" component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListsContext.Provider>
  );
}
