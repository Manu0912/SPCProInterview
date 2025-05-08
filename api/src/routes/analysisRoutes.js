import { Router } from 'express';
const router = Router();
import { calculate } from '../controllers/analysisController.js';
import { validateAnalysis } from '../middlewares/validatePayload.js';

router.post('/calculate', validateAnalysis, calculate);

export default router;
