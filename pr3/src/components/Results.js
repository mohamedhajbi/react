import { Outlet } from "react-router-dom"
import { Link } from 'react-router-dom';

function Results() {
    return (
        <div>
            <h1>Les résultats : </h1>
            <Link to="initial">Les résultats initial</Link>
            <Link to="final">Les résultats final</Link>
            <Outlet />
        </div>
    )
}
export default Results