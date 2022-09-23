import React, { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "./../components/ExpensesOutput";
import { ExpensesContext } from "./../store/expenses-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="total" />
  );
};

export default AllExpenses;
