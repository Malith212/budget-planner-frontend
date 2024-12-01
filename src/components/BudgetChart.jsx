import { Pie } from "react-chartjs-2";

function BudgetChart({ budgets }) {
    const data = {
        labels: budgets.map((budget) => budget.category),
        datasets: [
            {
                data: budgets.map((budget) => budget.amount),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return <Pie data={data} />;
}

export default BudgetChart;
