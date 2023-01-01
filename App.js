import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, View } from "react-native";
import GuideLineScreen1 from "./src/screens/GuideLineScreen1";
import GuideLineScreen2 from "./src/screens/GuideLineScreen2";
import GuideLineScreen3 from "./src/screens/GuideLineScreen3";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="home"
          >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="guideline-1" component={GuideLineScreen1} />
            <Stack.Screen name="guideline-2" component={GuideLineScreen2} />
            <Stack.Screen name="guideline-3" component={GuideLineScreen3} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
