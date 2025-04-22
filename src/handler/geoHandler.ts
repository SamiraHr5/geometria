import { Request, Response } from 'express';
import * as controller from '../controller/geoController';

export const triangleAreaHandler = (_req: Request, res: Response) => {
  const result = controller.calculateTriangleArea();
  res.json({ area: result });
};

export const rectanglePerimeterHandler = (_req: Request, res: Response) => {
  const result = controller.calculateRectanglePerimeter();
  res.json({ perimeter: result });
};

export const sphereVolumeHandler = (_req: Request, res: Response) => {
  const result = controller.calculateSphereVolume();
  res.json({ volume: result });
};
