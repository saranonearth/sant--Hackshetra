import {
    createContext
} from 'react';
// import jwt from 'jsonwebtoken';
// import config from '../config';
const userCred = JSON.parse(window.localStorage.getItem('sante'))
const Context = createContext({
    user: (userCred !== null) ? userCred : null,
    isAuth: false

})

export default Context;