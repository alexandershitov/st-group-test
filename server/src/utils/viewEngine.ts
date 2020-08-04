import exphbs from 'express-handlebars';
import { Paths } from './paths';

const defaultLayout = () => 'layout';

const extname = () => 'hbs';

const config = () => ({
  defaultLayout: defaultLayout(),
  extname: extname(),
  layoutsDir: Paths.layoutsPath()
});

const call = () => exphbs(config());

export const ViewEngine = { call, extname };