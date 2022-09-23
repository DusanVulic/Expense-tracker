import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "pair of shoes",
      amount: 59.99,
      date: new Date("2022-09-23"),
    },
    {
      id: "e2",
      description: "pants",
      amount: 29.99,
      date: new Date("2022-02-13"),
    },
    {
      id: "e3",
      description: "some bannanas",
      amount: 2.99,
      date: new Date("2022-05-22"),
    },
    {
      id: "e4",
      description: "book",
      amount: 6.99,
      date: new Date("2022-06-18"),
    },
    {
      id: "e5",
      description: "phone",
      amount: 600.99,
      date: new Date("2022-09-18"),
    },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
});
export default ExpensesOutput;
