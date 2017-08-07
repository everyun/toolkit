/**
 * Created by beckyliu on 2017/8/6.
 */

module.exports = app => {

    class ImageController extends app.Controller {

        source() {
            const { ctx } = this;
            return ctx.service.image.surrportSites();
        }

        async download() {

            const { ctx } = this;
            const site = ctx.params.site;
            const url = ctx.request.query.url;
            const supportSites = ctx.service.image.supportSites();

            if (site === undefined || !supportSites.includes(site)) {
                throw new Error('unsupported site ');
            }

            if (url && url.trim() !== '') {
                ctx.body = await ctx.service.image[`download${site}`](url);
            } else {
                throw new Error('unsupported url');
            }

        }

    }
    return ImageController;
}