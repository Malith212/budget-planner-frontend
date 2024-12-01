import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpensesPage from "./pages/Expenses";
import ExpenseForm from "./pages/Budgets";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ExpensesPage />} />
                <Route path="/add-expense" element={<ExpenseForm />} />
            </Routes>
        </Router>
    );
}

export default App;
