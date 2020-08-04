import dotenv from 'dotenv';

const defaultHost = () => '127.0.0.1';

const defaultPort = () => 3000;

const call = () => {
  const config = dotenv.config().parsed || {};

  const host = config.DEV_HOST || defaultHost();
  const port = parseInt(config.DEV_PORT) || defaultPort();

  return { host, port };
}

export const ConfigParser = { call };
