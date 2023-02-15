/**
 * tour controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::tour.tour");
const { createCoreController } = require("@strapi/strapi").factories;
const fs = require("fs");
const { createReadStream, createWriteStream } = require("fs");

module.exports = createCoreController("api::tour.tour", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::tour.tour").findOne({
      where: { slug: id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
