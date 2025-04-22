import { calculateTriangleArea } from '../controller/geoController';

test('Área del triángulo se calcula correctamente', () => {
  expect(calculateTriangleArea()).toBe(25);
});
