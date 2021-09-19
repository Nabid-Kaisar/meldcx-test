import "./Input.css";
import {Dispatch, SetStateAction} from "react";

interface optionsType {
    placeholder?: string;
    setData: Dispatch<SetStateAction<string>>;
    iconName?: string;
    class?: string;
    style?: any;
    onKeyDown?:any;
}

function Input(options: optionsType) {
    const handleOnChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        options.setData(e.target.value);
    }

    return (
        <div className="row">
            <div className="form-group col-xs-6">
                <label className="control-label">
                </label>
                <div className="inner-addon left-addon">
                    <i className={`icon-cls ${options.iconName}`}></i>
                    <input onKeyDown={options.onKeyDown} style={options.style} onChange={handleOnChange} type="text"
                           className={`form-control ${options.class}`} placeholder={options.placeholder}/>
                </div>
            </div>


        </div>


    )
}

export default Input;