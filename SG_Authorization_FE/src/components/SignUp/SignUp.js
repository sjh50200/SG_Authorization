import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { onRegisterHandler, onTextHandler } from '../../util/Handler';

function SignUp() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="registerBox">
            <div className="registerForm">
                <input type="text" value={id} className="idInput"
                    onChange={(e) => {
                        onTextHandler(e, setId)
                    }} placeholder='아이디' />
                <button className="dupCheckBtn">중복 확인</button>
                <br />
                <input type="password" value={password}
                    onChange={(e) => {
                        onTextHandler(e, setPassword)
                    }} placeholder='비밀번호' />
                <br />
                <button className="registerButton" onClick={(e) => {onRegisterHandler(e, id, password, navigate)}}>
                    회원가입 하기
                </button>
            </div>
        </div>
    )
}

export default SignUp;
