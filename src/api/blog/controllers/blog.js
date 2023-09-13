'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);

      // Don't include Content and Author attributes when querying for all blogs
      const new_data = data.map(item => {
        const newItem = { ...item };
        if (newItem.attributes) {
          delete newItem.attributes.Author;
          delete newItem.attributes.Content;
        }
        return newItem;
      });

      return { new_data, meta };
    }
  }));