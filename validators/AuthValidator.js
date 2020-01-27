const { check } = require('express-validator');
const  checkErrors  = require('./result');

const login = [
    check('email').isEmail(),
    check('password').isLength({ min: 3 }),
    checkErrors
];
const register= [
    check('email').isEmail(),
    check('firstName').isAlpha(),
    check('lastName').isAlpha(),
    check('password').isLength({ min: 3 }),
    //check('passwordConfirm').equals('password'),
    checkErrors
];


module.exports = {
    register,
    login
};
