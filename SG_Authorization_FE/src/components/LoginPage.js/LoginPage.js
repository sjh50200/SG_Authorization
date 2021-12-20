import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onTextHandler } from '../../util/Handler';
import { loginUser } from '../../_redux/action';
import './LoginPage.scss';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const body = {
            username: id,
            password: password
        }

        dispatch(loginUser(body, navigate, setId, setPassword));
    }

    return (
        <div className="loginBox">
            {/* <form className="loginForm"> */}
            <div className="loginForm">
                <input type="text" value={id}
                    onChange={(e) => {
                        onTextHandler(e, setId)
                    }} placeholder='아이디' />
                <br />
                <input type="password" value={password}
                    onChange={(e) => {
                        onTextHandler(e, setPassword)
                    }} placeholder='비밀번호' />
                <br />
                <button className="submitButton" onClick={onSubmitHandler} >
                    로그인
                </button>
            </div>
            {/* </form> */}
            <div className="utilBox">
                <Link to="/signup" className="registerLink">
                    회원가입
                </Link>
            </div>
        </div>
    )
}

export default LoginPage;
