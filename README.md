# Mollify [![License][LicenseIMGURL]][LicenseURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![NPM version][NPMIMGURL]][NPMURL]

Middleware for [minify](http://coderaiser.github.io/minify "Minify").

## Install

```
npm i mollify --save
```

## How to use?

```js
import mollify from 'mollify';
import http from 'http';
import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);

const port = 1337;
const ip = '0.0.0.0';

app.use(mollify({
    dir: __dirname,
    is: true, // default
}));

app.use(express.static(__dirname));

server.listen(port, ip);
```

## License

MIT

[NPMIMGURL]: https://img.shields.io/npm/v/mollify.svg?style=flat
[BuildStatusIMGURL]: https://img.shields.io/travis/coderaiser/node-mollify/master.svg?style=flat
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPM_INFO_IMG]: https://nodei.co/npm/mollify.png?stars
[NPMURL]: http://npmjs.org/package/mollify
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[BuildStatusURL]: http://travis-ci.org/coderaiser/node-mollify "Build Status"
