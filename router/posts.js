import express from 'express';
import { createPost, getPosts, updatePost } from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/update', updatePost);

export default router;