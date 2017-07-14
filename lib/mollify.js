'use strict';

const path = require('path');
const minify = require('minify');
const ponse = require('ponse');

module.exports = (options) => {
    if (!options)
        options = {};
    
    return mollify.bind(null, options);
};

function getValue(value) {
    const isFunction = typeof is === 'function';
    
    if (isFunction)
        return is();
    
    return is || is === undefined;
    
}

function mollify(options, request, response, next) {
    const name = req.url;
    const isExt = /\.(js|css|html)$/.test(name);
    
    const is = options.is;
    const dir = options.dir || './';
    
    const name = path.join(dir, name);
    
    if (!isExt || !isMinify)
        return next();
    
    minify(name, 'name', (error, name) => {
        if (error)
            return next();
        
        ponse.sendFile({
            request,
            response,
            name,
            gzip: true,
            cache: true,
        });
    });
}

