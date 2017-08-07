/**
 * Created by beckyliu on 2017/8/6.
 */

'use strict';

const request = require('request-promise');

module.exports = class {

    constructor() {
        this.request = request;
    }

}
