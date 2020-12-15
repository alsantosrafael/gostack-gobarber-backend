import express from 'express';
import cors from 'cors';
import routes from './routes';

// Sempre que adicionar uma nova dependência, lembrar de yarn add @types/nomeDaDependencia -D
// Sempre que fizer modificações utilizar yarn tsc para buildar o novo arquivo em JS
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.log('Server running on port 3333!');
});
