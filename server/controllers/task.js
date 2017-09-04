import Task from '../models/task';

export async function create(req, res, next) {
    const taskData = req.body;
    const userId = req.user._id;

    taskData.userId = userId;

    try {
        var task = await Task.create(taskData);
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }

    res.json(task);
}

export async function getAll(req, res, next) {
    const {_id} = req.user;

    try {
        var tasks = await Task.find({userId: _id});
    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }

    res.json(tasks);
}

export async function getOne(req, res, next) {
    const id = req.url.split('/').pop();

    try {
        var taskItem = await Task.findOne({_id: id});
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }

    res.json(taskItem);
}

export async function editOne(req, res, next) {
    const id = req.url.split('/').pop();

    try {
        var taskItem = await Task.findOne({_id: id});
        taskItem.title = req.body.title;
        taskItem.body = req.body.body;
        taskItem.complete = req.body.complete;
        taskItem.save();
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }

    res.json(taskItem);
}

export async function removeOne(req, res, next) {
    const id = req.url.split('/').pop();

    try {
        var taskItem = await Task.findOne({_id: id}).remove();
    } catch ({message}) {
        return next({
            status: 404,
            message
        });
    }

    res.json(taskItem);
}