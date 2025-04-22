import { Router } from 'express';
import {
  triangleAreaHandler,
  rectanglePerimeterHandler,
  sphereVolumeHandler,
} from '../handler/geoHandler';

const router = Router();

router.get('/triangle/area', triangleAreaHandler);
router.get('/rectangle/perimeter', rectanglePerimeterHandler);
router.get('/sphere/volume', sphereVolumeHandler);

export default router;
