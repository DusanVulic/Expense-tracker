import axios from "axios";

const backendURL =
    "https://expense-tracker-50e96-default-rtdb.europe-west1.firebasedatabase.app/";

export const storeExpense = (expenseData) => {
    axios.post(backendURL + "expenses.json", expenseData);
};

export const fetchExpenses = async() => {
    const response = await axios.get(backendURL + "expenses.json");

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].data),
            description: response.data[key].description,
        };

        expenses.push(expenseObj);
    }

    return expenses;
};