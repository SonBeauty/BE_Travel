/**
 * tour controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::tour.tour");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tour.tour", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::tour.tour").findOne({
      where: { id: id },
    });
    return entity;
  },
}));
