import React, { useState } from 'react'

const EventPractice = () => {
    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleClick = () => {
        setForm({
            username: "",
            message: "",
        });
    };
    const handleKeyDown = (e) => {
        if ( e.key === "Enter" ) {
            handleClick();
        }
    }
    return (
        <div>
            <h1>EventPractice</h1>
            <p>이름: {form.username}</p>
            <p>내용: {form.message}</p>
            <input 
                type="text"
                value={form.username}
                name="username"
                placeholder="이름을 입력해 주세요."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <br/>
            <input 
                type="text"
                value={form.message}
                name="message"
                placeholder="내용을 입력해 주세요."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            /><br/>
            <button
                onClick={handleClick} 
            >확인</button>
        </div>
    );
}

export default EventPractice;