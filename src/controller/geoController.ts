import * as db from '../db/fake/fakeService';
import { Triangle, Rectangle, Sphere, GeometryResponse } from '../types/geo';

export const calculateTriangleArea = () => {
  const { base, height } = db.getTriangleData();
  return 0.5 * base * height;
};

export const calculateRectanglePerimeter = () => {
  const { length, width } = db.getRectangleData();
  return 2 * (length + width);
};

export const calculateSphereVolume = () => {
  const { radius } = db.getSphereData();
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
};
