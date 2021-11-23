import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/pages/Home";
import { AddTask } from "./src/pages/AddTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import api from "./src/services/api";
import { ListType } from "./src/@types";
import { ListContext } from "./src/contexts/ListsContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    const getAllLists = async () => {
      const response = await api.get("/lists");
      setLists(response.data);
    };

    console.log("Fetch tasks");

    getAllLists();
  }, []);

  return (
    <ListContext.Provider value={lists}>
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
    </ListContext.Provider>
  );
}
