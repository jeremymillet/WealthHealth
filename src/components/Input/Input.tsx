import { DatePicker, Input, InputNumber,Select } from "antd"
import './Input.css'
type InputProps = {
    text: string,
    type: string,
    value?: Array<object>
    
}



const InputForm: React.FC<InputProps> = ({ text, type ,value}) => {
     let inputElement;

    switch (type) {
        case 'date':
            inputElement = <DatePicker name="date"/>;
            break;
        case 'text':
            inputElement = <Input name="text"/>;
            break;
        case 'number':
            inputElement = <InputNumber className="input-number" name="number"/>;
            break;
        case 'select':
            inputElement = <Select options={value}/>;
            break;
        default:
            inputElement = <Input name="text"/>;
            break;
    }
    return (
        <div className="input-text-container">
            <label htmlFor="inputText">{text}</label>
            {inputElement}
        </div>
    )
}
export default InputForm