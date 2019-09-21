// import config from '../config.json'
export default function reducer(state, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                user: payload,
                    isAuth: true
            }
            default:
                return state;
    }
}