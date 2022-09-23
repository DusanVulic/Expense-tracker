import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext();

const expensesReducer = (state, action) => {
  if (action.type === "ADD") {
    const id = new Date().toString() + Math.random().toString();
    return [...state, { ...action.payload, id }];
  }
  if (action.type === "UPDATE") {
    const editedExpenseIndex = state.findIndex(
      (expense) => expense.id === action.payload.id
    );

    const editingExpense = state[editedExpenseIndex];
    const updatedExpense = { ...editingExpense, ...action.payload.data };
    const updatedExpenses = [...state];
    updatedExpenses[updatedExpenses] = updatedExpense;
    return updatedExpenses;
  }
  return state;
};

const ExpensesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
