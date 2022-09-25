import React, { useContext, useEffect, useState } from "react";

import { ExpensesContext } from "../store/expenses-context";
import LoadingOverlay from "../UI/LoadingOverlay";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import ExpensesOutput from "./../components/ExpensesOutput";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      setLoading(true);
      const expenses = await fetchExpenses();
      setLoading(false);
      expenseCtx.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  if (loading) {
    return <LoadingOverlay />;
  }

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
