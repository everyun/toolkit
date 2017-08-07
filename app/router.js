'use strict';

module.exports = app => {
    app.get('/', 'home.index');
    app.get('/image/:site/download', 'image.download');
};
