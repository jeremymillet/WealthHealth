import { Link } from "react-router-dom"
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm"

function Home() {
    return (
        <div>
            <h1>HRnet</h1>
            <Link to={"/currentEmployee"} >View Current Employees</Link>
            <h2>Create Employee</h2>
            <div>
                <CreateEmployeeForm/>
            </div>
        </div>
    )
}

export default Home