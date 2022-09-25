import axios from "axios";

export const storeExpense = (expenseData) => {
    axios.post(
        "https://expense-tracker-50e96-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
        expenseData
    );
};