import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <ul className="flex space-x-4">
                <li><Link to="/budgets">Budgets</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
            </ul>
        </nav>
    );
}
//edited
export default Navbar;
