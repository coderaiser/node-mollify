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
    const isFunction = typeof value === 'function';
    
    if (isFunction)
        return value();
    
    return value || value === undefined;
}

function mollify(options, request, response, next) {
    const {url} = request;
    const isExt = /\.(js|css|html)$/.test(url);
    const {
        dir = './',
    } = options;
    
    const name = path.join(dir, url);
    const isMinify = getValue(options.is);
    
    if (!isExt || !isMinify)
        return next();
    
    minify(name, 'name').then((name) => {
        ponse.sendFile({
            request,
            response,
            name,
            gzip: true,
            cache: true,
        });
    }).catch(next);
}

