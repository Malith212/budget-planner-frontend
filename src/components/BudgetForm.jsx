import axios from "axios";
import { useState } from "react";

function BudgetForm({ onAdd }) {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBudget = { category, amount: parseInt(amount) };
        const response = await axios.post("http://localhost:5000/budgets", newBudget);
        onAdd(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <button className="bg-blue-500 text-white p-2 w-full">Add Budget</button>
        </form>
    );
}

export default BudgetForm;
