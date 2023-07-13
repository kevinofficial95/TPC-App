// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Colors from "../constants/Colors";
import Contacts from "../screens/Contacts";
import OurTeam from "../screens/OurTeam";
import VerseOfDay from "../screens/VerseOfDay";
import VerseFinder from "../screens/VerseFinder";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="OurTeam"


        component={OurTeam}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="church" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="VerseOfDay"
        component={VerseOfDay}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bible" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="VerseFinder"
        component={VerseFinder}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search" color="black"/>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
