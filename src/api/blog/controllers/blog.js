'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
    async find(ctx) {
      var { data, meta } = await super.find(ctx);

      // Don't include Content and Author attributes when querying for all blogs
      data = data.map(item => {
        const newItem = { ...item };
        if (newItem.attributes) {
          delete newItem.attributes.Author;
          delete newItem.attributes.Content;
        }
        return newItem;
      });

      return { data, meta };
    }
  }));