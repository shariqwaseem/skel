import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DummyScreen from "./Screens/DummyScreen";

// Redux includes and inits
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
let persistor = persistStore(store);
//Redux includes and inits



//Firebase init
import * as firebase from "firebase";
import { firebaseConfig } from "./config/firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


//Firebase init


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DummyScreen" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
