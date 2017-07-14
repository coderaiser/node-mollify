# Mollify

Middleware for [minify](http://coderaiser.github.io/minify "Minify").

## Install

```
npm i mollify --save
```
## How to use?

```js
const mollify = require('mollify');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const port = 1337;
const ip = '0.0.0.0';

app.use(mollify({
    dir: __dirname
}));

app.use(express.static(__dirname));

server.listen(port, ip);
```

## License

MIT

