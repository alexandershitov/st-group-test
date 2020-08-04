import express from 'express';

const application = express();

application.get('/', (req, res) => {
  res.send('Hello World!');
});

export default application;