import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import { ignoreFavicon, logger } from './middleware';

const app = express(); // Express App with middleware initiation

app.disable('x-powered-by'); // Disable "powered-by" header for security
app.set('trust proxy', true); // allows reverse proxy trust

app.use(bodyParser.json()); // Takes raw requests and turns them into usable properties on req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ignoreFavicon); // ignore favicon requests
app.use(logger); // request logger
app.use(cookieParser());
app.use('/api', routes); // routing

export default app;
