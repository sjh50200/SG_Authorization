export const SIGNUP_URL = "http://localhost:8080/api/user";
export const LOGIN_URL = "http://localhost:8080/api/authenticate";
export const DUP_URL = (param) => {
    return `http://localhost:8080/api/user/${param}`;
}