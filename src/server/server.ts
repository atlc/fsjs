import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as passport from 'passport';
import router from './routes';

// import './middlewares/pp-local';
import './middlewares/pp-jwt';

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(passport.initialize());
app.use(router);


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));



app.listen(42069, () => console.log('Server is up!'));