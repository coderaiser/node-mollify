# Mollify

Middleware for [minify](http://coderaiser.github.io/minify "Minify").

## Install

```
npm i mollify --save
```
## How to use?

```js
var minify      = require('mollify'),
    http        = require('http'),
    express     = require('express'),
    
    app         = express(),
    server      = http.createServer(app),
    
    port        = 1337,
    ip          = '0.0.0.0';
    
app.use(mollify({
    dir: __dirname
}));

app.use(express.static(__dirname));

server.listen(port, ip);
```

## License

MIT
