import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/expenses")
            .then(response => setExpenses(response.data))
            .catch(error => console.error("Error fetching expenses:", error));
    }, []);

    const deleteExpense = (id) => {
        axios.delete(`http://localhost:5000/expenses/${id}`)
            .then(() => setExpenses(expenses.filter(expense => expense.id !== id)))
            .catch(error => console.error("Error deleting expense:", error));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Expenses</h1>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id} className="mb-2 border-b pb-2 flex justify-between">
                        <span>{expense.category} - ${expense.amount} on {expense.date}</span>
                        <button
                            onClick={() => deleteExpense(expense.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpensesPage;
