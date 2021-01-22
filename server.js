const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
// const proxy = require('http-proxy-middleware');
// const { createProxyMiddleware } = proxy;

const app = express();
const PORT = 3005;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`we are listening on PORT: ${PORT}`);
});

/* nothing below is being used -- will delete later */

// const API_SERVICE_URL = "http://localhost:3000";

// app.use(createProxyMiddleware('/', {target: 'http://localhost:3001'}));
// app.use(createProxyMiddleware('/', {target: 'http://localhost:3000'}));

// app.use(proxy('/', {target: 'http://localhost:3003'}));



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

// app.use('/', createProxyMiddleware({
//   target: 'http://localhost:3001',
//   changeOrigin: true,
//   pathRewrite: {
//       [`^/localhost:3001`]: '',
//   },
// }));

// app.use('/', createProxyMiddleware({
//   target: 'http://localhost:3000',
//   changeOrigin: true,
//   pathRewrite: {
//       [`^/localhost:3000`]: '',
//   },
// }));