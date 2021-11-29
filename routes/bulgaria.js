import express from 'express';

import { getBulgariaData } from '../controllers/bulgaria.js';

const router = express.Router();    //With this we initialise a roter

router.get('/:appId', getBulgariaData);

router.post('/', getBulgariaData);

export default router; 
