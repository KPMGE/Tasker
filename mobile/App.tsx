import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/pages/Home";
import { AddTask } from "./src/pages/AddTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text } from "react-native";
import { useLists } from "./src/hooks/useLists";
import { ListsProvider } from "./src/contexts/ListsProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  const { loading, error } = useLists();

  if (loading) {
    return (
      <View>
        <Text>loading....</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Something went wrong....</Text>
      </View>
    );
  }

  return (
    <ListsProvider>
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
    </ListsProvider>
  );
}
