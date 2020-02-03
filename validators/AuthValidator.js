const { check } = require('express-validator');
const  checkErrors  = require('./result');

const login = [
    check('email').isEmail().withMessage('Invalid value at email field'),
    check('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters'),
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
