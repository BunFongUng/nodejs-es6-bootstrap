import { Router } from 'express';
import { createPost, postList, deletePost } from './post.controller';

const router = Router();

router.post('/create', createPost);

router.get('/list', postList);

router.delete('/delete/:id', deletePost);

export default router;
