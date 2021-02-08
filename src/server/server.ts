import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import router from './routes';

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(router);


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));



app.listen(42069, () => console.log('Server is up!'));