import React, { useContext, useEffect, useState } from "react";

import { ExpensesContext } from "../store/expenses-context";
import ErrorOverlay from "../UI/ErrorOverlay";
import LoadingOverlay from "../UI/LoadingOverlay";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import ExpensesOutput from "./../components/ExpensesOutput";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState();

  useEffect(() => {
    const getExpenses = async () => {
      setLoading(true);
      try {
        const expenses = await fetchExpenses();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError("could not fetch data");
      }

      setLoading(false);
    };

    getExpenses();
  }, []);

  if (error && !loading) {
    return <ErrorOverlay message={error} />;
  }

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
