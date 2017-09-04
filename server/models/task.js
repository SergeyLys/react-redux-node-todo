import mongoose, { Schema } from 'mongoose';

const TaskSchema = new Schema({
    title: {type: String, require: true},
    body: {type: String, require: true},
    createdAt: {type: Date, require: true, default: Date.now()},
    complete: {type: Boolean, require: true, default: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

export default mongoose.model('Tasks', TaskSchema);