import { Router } from 'express';
import apiRouter from './api';
import { notFound, captureErrors } from '../middleware';

const router = Router();

router.use('/', apiRouter);
router.use('*', notFound, captureErrors);

export default router;
