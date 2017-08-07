/**
 * Created by beckyliu on 2017/8/6.
 */

'use strict';

const Base = require('./ImageBase');

module.exports = class extends Base {

    async download(url) {
        console.log(await this.request(url));
    }

};
