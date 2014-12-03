(function() {
    'use strict';
    
    var path    = require('path'),
    
        minify  = require('minify'),
        ponse   = require('ponse'),
        check   = require('checkup');
    
    module.exports = function(options) {
        check([options], ['options']);
        
        return mollify.bind(null, options);
    };
    
    function mollify(options, req, res, next) {
        var isMinify, dir, is, isFunction,
            name        = req.url,
            isExt       = /\.(js|css|html)$/.test(name);
        
        is              = options.is;
        dir             = options.dir || './';
        
        isFunction      = typeof is === 'function';
        name            = path.join(dir, name);
        
        if (isFunction)
            isMinify    = is();
        else
            isMinify    = is || is === undefined;
        
        if (!isExt || !isMinify)
            next();
        else
            minify(name, 'name', function(error, name) {
                if (error)
                    next();
                else
                    ponse.sendFile({
                        request: req,
                        response: res,
                        name: name,
                        gzip: true,
                        cache:true,
                    });
            });
    }
    
})();
