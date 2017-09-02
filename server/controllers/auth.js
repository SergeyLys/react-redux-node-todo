import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config/index';

export const signin = async (req, res, next) => {
    const { login, password } = req.body;
    const user = await User.findOne({login});
}