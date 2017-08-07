/**
 * Created by beckyliu on 2017/8/6.
 */

'use strict';

module.exports = app => {
    class Image extends app.Service {

        supportSites() {
            return [
                '500px',
                'zcool',
            ];
        }
        async download500px(url) {
            const { ctx } = this;
            console.log(await ctx.curl(url, {
                dataType: 'text',
            }));
        }
    }
    return Image;
};
