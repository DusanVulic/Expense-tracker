import { StatusBar } from "expo-status-bar";

//import navigation container
import { NavigationContainer } from "@react-navigation/native";
//import navigators

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//screens
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

///importing styles
import { GlobalStyles } from "./constants/styles";

//importing icons
import { Entypo } from "@expo/vector-icons";
import IconButton from "./UI/IconButton";
//context provider
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "green",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          height: 70,
          padding: 10,
        },
        tabBarLabelStyle: { fontSize: 14, marginBottom: 5 },

        tabBarActiveTintColor: "green",
        headerRight: () => (
          <IconButton
            icon="squared-plus"
            size={32}
            color="green"
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, focused }) => (
            <Entypo
              name="back-in-time"
              color={focused ? "green" : "gray"}
              size={30}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All expenses",
          tabBarIcon: ({ size, focused }) => (
            <Entypo
              name="calendar"
              color={focused ? "green" : "gray"}
              size={35}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "green",
            }}
          >
            <Stack.Screen
              name="ExpenseOverView"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
