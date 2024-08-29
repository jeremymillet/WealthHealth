
import InputForm from '../Input/Input';
import './CreatEmployeeForm.css'
import { Button } from "antd";

const departments = [
    {
        value: "Sales",
        label: "Sales"
    },
    {
        value: "Marketing",
        label: "Marketing"
    },
    {
        value: "Engineering",
        label: "Engineering"
    },
    {
        value: "Human Resources",
        label: "Human Resources"
    },
    {
        value: "Legal",
        label: "Legal"
    },
]
const states = [
    {

    }
]
function CreateEmployeeForm() {
    return (
        <div>
            <form className='form-container'>
                <InputForm text="First Name" type="text" />
                <InputForm text="Last Name" type="text" />
                <InputForm text="Date of Birth" type="date" />
                <InputForm text="Start Date" type="date" />
                <div className='address-container'>
                    <p>Address</p>
                    <InputForm text="Street" type="text" />
                    <InputForm text="City" type='text' />
                    <InputForm text="State" type='select' value={states} />
                    <InputForm text="Zip Code" type='number' />
                </div>
                <InputForm text="Department" type='select' value={departments} />
            </form>
            <Button type="primary">Save</Button>
        </div>
    )
}

export default CreateEmployeeForm