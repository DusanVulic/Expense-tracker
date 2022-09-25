import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import ExpensesOutput from "./../components/ExpensesOutput";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expenseCtx.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="last 7 days" />
  );
};

export default RecentExpenses;
