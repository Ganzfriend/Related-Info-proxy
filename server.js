const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3005;

app.use(morgan('dev'));
// const API_SERVICE_URL = "http://localhost:3000";


// app.use('', (req, res, next) => {
//   if (req.headers.authorization) {
//       next();
//   } else {
//       res.sendStatus(403);
//   }
// });


/* not sure if i did the pathRewrite correctly */
// app.use('/', createProxyMiddleware({
//   target: 'http://localhost:3003',
//   changeOrigin: true,
//   pathRewrite: {
//       [`^/localhost:3003`]: '',
//   },
// }));

app.use('/', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: {
      [`^/localhost:3001`]: '',
  },
}));

app.use('/', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: {
      [`^/localhost:3000`]: '',
  },
}));




app.listen(PORT, () => {
  console.log(`we are listening on PORT: ${PORT}`);
})