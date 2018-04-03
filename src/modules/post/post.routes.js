import { Router } from 'express';
import {
  createPost,
  postList,
  deletePost,
  postDetail,
  updatePost
} from './post.controller';

const router = Router();

router.post('/create', createPost);

router.get('/list', postList);

router.delete('/delete/:id', deletePost);

router.get('/:id', postDetail);

routes.patch('/update/:id', updatePost);

export default router;
