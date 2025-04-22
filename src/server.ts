import express from 'express';
import geometryRoutes from './routes/geoRoutes';

const app = express();

const port = 3000;

app.use('/api', geometryRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
