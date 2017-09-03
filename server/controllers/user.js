import User from '../models/user';

async function getUserByToken(token) {
    const { _id } = token;

    try {
        var user = await User.findOne({_id}, {password: 0});
    } catch (e) {
        throw e;
    }

    return user;
}

export async function getCurrentUser(req, res, next) {
    const { token } = req;

    try {
        var user = await getUserByToken(token);
    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }

    return res.json(user);
}