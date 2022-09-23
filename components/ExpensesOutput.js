import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  let content = (
    <Text style={styles.info}>No expenses here, maybe create one ? </Text>
  );

  if (expenses.length <= 0) {
    return content;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },

  info: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 80,
    textAlign: "center",
    fontSize: 18,
    color: "green",
  },
});
export default ExpensesOutput;
