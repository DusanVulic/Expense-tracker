import { createContext, useReducer } from "react";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "pair of shoes",
//     amount: 59.99,
//     date: new Date("2022-09-23"),
//   },
//   {
//     id: "e2",
//     description: "pants",
//     amount: 29.99,
//     date: new Date("2022-02-13"),
//   },
//   {
//     id: "e3",
//     description: "some bannanas",
//     amount: 2.99,
//     date: new Date("2022-05-22"),
//   },
//   {
//     id: "e4",
//     description: "book",
//     amount: 6.99,
//     date: new Date("2022-06-18"),
//   },
//   {
//     id: "e5",
//     description: "phone",
//     amount: 600.99,
//     date: new Date("2022-09-18"),
//   },
//   {
//     id: "e6",
//     description: "DELETE TEST",
//     amount: 999.99,
//     date: new Date("2022-09-18"),
//   },
// ];

export const ExpensesContext = createContext();

const expensesReducer = (state, action) => {
  if (action.type === "ADD") {
    return [action.payload, ...state];
  }
  if (action.type === "UPDATE") {
    const updatebleExpenseIndex = state.findIndex(
      (expense) => expense.id === action.payload.id
    );

    const updateableExpense = state[updatebleExpenseIndex];
    const updatedItem = { ...updateableExpense, ...action.payload.data };
    const updatedExpenses = [...state];
    updatedExpenses[updatebleExpenseIndex] = updatedItem;
    return updatedExpenses;
  }
  if (action.type === "DELETE") {
    return state.filter((expense) => expense.id !== action.payload);
  }
  if (action.type === "SET") {
    const inverted = action.payload.reverse();

    return inverted;
  }
  return state;
};

const ExpensesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };
  const value = {
    expenses: state,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
