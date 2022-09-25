import axios from "axios";

const backendURL =
    "https://expense-tracker-50e96-default-rtdb.europe-west1.firebasedatabase.app/";

export const storeExpense = async(expenseData) => {
    const response = await axios.post(backendURL + "expenses.json", expenseData);
    const id = response.data.name;
    return id;
};

export const fetchExpenses = async() => {
    const response = await axios.get(backendURL + "expenses.json");

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };

        expenses.push(expenseObj);
    }

    return expenses;
};

export const updateExpense = (id, expenseData) => {
    return axios.put(backendURL + `expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
    return axios.delete(backendURL + `expenses/${id}.json`);
};