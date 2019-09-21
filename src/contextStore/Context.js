import {
    createContext
} from 'react';
// import jwt from 'jsonwebtoken';
// import config from '../config';

const Context = createContext({
    user: null,
    isAuth: false

})

export default Context;