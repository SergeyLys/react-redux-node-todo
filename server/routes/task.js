import express from 'express';
import * as TaskController from '../controllers/task';

const router = express.Router();

router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:url', TaskController.getOne);
router.put('/tasks/:url', TaskController.editOne);
router.delete('/tasks/:url', TaskController.removeOne);

export default router;