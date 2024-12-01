import BudgetChart from "../components/BudgetChart";

function Budgets() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/budgets")
            .then((response) => setBudgets(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <BudgetChart budgets={budgets} />
        </div>
    );
}

export default Budgets;
