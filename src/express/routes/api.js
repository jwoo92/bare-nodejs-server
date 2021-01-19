import { Router } from 'express';
import { API } from '../controllers';

const router = Router();

router.get('/health', API.getHealthStatus);
router.get('/version', API.getVersion);
router.get('/hello-world', API.getWorld);
router.get('/', API.overview);

export default router;
