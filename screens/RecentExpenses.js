import React from "react";
import { Text } from "react-native";
import ExpensesOutput from "./../components/ExpensesOutput";
const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="last 7 days" />;
};

export default RecentExpenses;
