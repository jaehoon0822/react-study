import React, { useState } from 'react';
import './ValidationSample.css';

const ValidationSample = () => {
    const input = React.createRef();
    const [validate, setValidate] = useState({
        password: "",
        clicked: false,
        validated: false,
    });
    const handleChange = (e) => {
        console.log(validate);
        setValidate({
            password: e.target.value,
            clicked: false,
            validated: false 
        });
    }
    const handleButtonClick = () => {
        console.log(validate);
        setValidate({
            password: "",
            clicked: true,
            validated: validate.password === "000",
        });
        input.current.focus();
    }
    return (
        <div>
            <input 
                type="text"
                value={validate.password}
                placeholder="비밀번호를 입력해주세요."
                onChange={handleChange}
                className={
                    validate.clicked ? (
                    validate.validated ?
                        "success" : "failure"
                    ) : ""
                }
                ref={ input }
            />
            <button
                onClick={handleButtonClick} 
            >확인</button>
        </div>
    );
}

export default ValidationSample