// import config from '../config.json'
export default function reducer(state, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
<<<<<<< HEAD


        default:
            return state;
=======
        case 'LOGIN':
            return {
                ...state,
                user: payload,
                    isAuth: true
            }
            default:
                return state;
>>>>>>> a311241343f93941de24d10c9511dc9b0ae3f5b7
    }
}