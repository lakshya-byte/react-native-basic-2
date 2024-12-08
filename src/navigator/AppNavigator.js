import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import Profile from "../screens/Profile";
import About from "../screens/About";
import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../Components/TabBarIcon";
import TabBarText from "../Components/TabBarText";

const StackNavigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark : "white",
          backgroundColor: isDarkmode ? themeColor.dark : "white",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title="Home" />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"home"} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title="About" />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"information-circle"} />,
        }}
        name="About"
        component={About}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title="Profile" />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"person"} />,
        }}
        name="Profile"
        component={Profile}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="MainTabs" component={MainTabs} />
        <StackNavigator.Screen name="SecondScreen" component={SecondScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
