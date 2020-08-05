import { Title } from './title';
import { Asset } from './asset';

const call = (req) => ({
  title: Title.call(req),
  application: Asset.call('application', 'js')
});

export const Context = { call } ;