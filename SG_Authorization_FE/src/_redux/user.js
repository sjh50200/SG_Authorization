import { INIT_STATE, LOGIN_USER } from "./types";

export function user(state = INIT_STATE, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                auth: LOGIN_USER
            };

        default:
            return state;
    }
}

