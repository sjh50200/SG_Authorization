import axios from 'axios';
import { DUP_URL } from './Url';

export const checkDupId = (id, setId) => {
    axios.get(DUP_URL(id))
    .then(response => {
        //ok 중복 없음
        if(response.status === 200) 
            return;
        //중복임! 
        else if(response.status === 406) {
            alert("중복된 아이디입니다.");
            setId("");
        }
    });
}