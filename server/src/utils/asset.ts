const publicPath = () => 'http://127.0.0.1:3800/public'

const call = (name: string, ext: string) => `${publicPath()}/${name}.${ext}`;

export const Asset = { call };