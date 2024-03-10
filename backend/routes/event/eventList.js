import {Router} from 'express';
import getEventList from '../../controllers/event/eventList.js';

const router = Router();

router.post('/list', getEventList);

export default router;