// import { useDispatch } from 'react-redux';
import axios from "axios";
import { SIGNUP_URL } from "./Url";

export function onTextHandler(event, setSomething) {
    setSomething(event.currentTarget.value);
}
// 오! 핸들러 하나의 함수로 재사용 가능!
// 파라미터 2개 이상 넘어올때는 꼭 onClick에서 함수로 넘겨주기



export function onRegisterHandler(e, id, pw, navigate) {
    const body = {
        username: id,
        password: pw
    }

    console.log(body);
    axios.post(SIGNUP_URL, body)
        .then(response => {
            if (response.status === 200) {
                alert("회원 가입이 완료되었습니다.");
                navigate("/");
            } else {
                alert("회원가입 실패! 다시 입력해주세요.");
            }
        })
}

