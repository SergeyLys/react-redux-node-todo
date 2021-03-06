import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config/index';

export const signup = async (req, res, next) => {
    const credentials = req.body;

    console.log(credentials);

    try {
        var user = await User.create(credentials);
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }

    res.json(user);
};

export const signin = async (req, res, next) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if (!user) {
        return next({
            status: 401,
            message: 'User not found'
        });
    }

    try {
        const result = await user.comparePasswords(password);
    } catch (e) {
        return next({
            status: 400,
            message: 'Bad credentials'
        });
    }

    const token = jwt.sign({_id: user._id}, config.secret);

    res.json(token);
};
