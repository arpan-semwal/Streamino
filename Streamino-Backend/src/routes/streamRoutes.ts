import express from 'express';
import { createStream } from '../controllers/streamController';

const router = express.Router();

router.post('/create', createStream);

export default router;
