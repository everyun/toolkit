/**
 * Created by beckyliu on 2017/8/6.
 */

'use strict';

const px500 = require('../../../lib/image/500px');

describe('lib/image/500px.js', () => {

    it('download image', () => {
        const px500Instance = new px500();
        px500Instance.download('http://www.baidu.com');
    });

});
