import express from 'express';
import { createStream, getLiveStreams } from '../controllers/streamController';

const router = express.Router();

router.post('/create', createStream);
router.post('/live' , getLiveStreams);

export default router;
