const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

app.use('/api', createProxyMiddleware({
  target: 'http://unifeobapitrab.zapto.org:3030',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

app.listen(5000, () => {
  console.log('Proxy rodando em http://localhost:5000');
});
