import express from 'express';
import { ViewEngine } from './utils/viewEngine';
import { Paths } from './utils/paths';

const application = express();

application.set('view engine', ViewEngine.extname());
application.set('views', Paths.viewsPath());
application.engine(ViewEngine.extname(), ViewEngine.call());

application.get('/', (req, res) => {
  res.render('register.hbs');
});

application.get('/schedule', (req, res) => {
  res.render('schedule.hbs');
});

application.get('*', (req, res) => {
  res.redirect('/')
});

export default application;