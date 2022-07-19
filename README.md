# Mollify [![License][LicenseIMGURL]][LicenseURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/mollify.svg?style=flat
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPM_INFO_IMG]: https://nodei.co/npm/mollify.png?stars
[NPMURL]: http://npmjs.org/package/mollify
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[BuildStatusURL]: https://github.com/coderaiser/node-mollify/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/node-mollify/workflows/Node%20CI/badge.svg

Middleware for [minify](https://github.com/coderaiser/minify "Minify").

## Install

```
npm i mollify --save
```

## How to use?

```js
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import http from 'http';

import mollify from 'mollify';
import express from 'express';

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
