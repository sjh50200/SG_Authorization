import axios from "axios";
import { LOGIN_URL } from "../util/Url";
import { LOGIN_USER } from "./types";

export const loginUser = (body, navigate, setId, setPassword) => {
    axios.post(LOGIN_URL, body)
    .then(response => {
        if(response.status === 200) {
            alert("로그인 성공!");
            window.localStorage.setItem("userToken", response.data.token);
            navigate("/");
        } else {
            alert("로그인 실패! 다시 입력하세요.");
            setId("");
            setPassword("");
        }
    });
    
    return {
        type: LOGIN_USER
    };
}
