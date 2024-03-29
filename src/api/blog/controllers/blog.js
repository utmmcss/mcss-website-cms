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
          for (const key in newItem.attributes) {
            if (key.charAt(0).toLowerCase() !== key.charAt(0)) {
              newItem.attributes[key.charAt(0).toLowerCase() + key.slice(1)] = newItem.attributes[key];
              delete newItem.attributes[key];
            }
          }
        }
        return newItem;
      });

      return { data, meta };
    },

    async findOne(ctx) {
        var response = await super.findOne(ctx);

        for (const key in response.data.attributes) {
          if (key.charAt(0).toLowerCase() !== key.charAt(0)) {
            response.data.attributes[key.charAt(0).toLowerCase() + key.slice(1)] = response.data.attributes[key];
            delete response.data.attributes[key];
          }
      }

        return response;
      }
  }));