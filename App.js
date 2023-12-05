import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tela1 from "./screens/Tela1";
import Tela2 from "./screens/Tela2";
import Tela3 from "./screens/Tela3";
import Tela4 from "./screens/Tela4";
import Tela5 from "./screens/Tela5";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
