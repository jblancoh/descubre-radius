const slugify = require('slugify');

module.exports = {
    async beforeCreate(event) {
      if (event.params.data.name && event.params.data.lastName) {
        event.params.data.slug = slugify(`${event.params.data.name} ${event.params.data.lastName}`, {lower: true});
      }
    },
    async beforeUpdate(event) {
      if (event.params.data.name && event.params.data.lastName) {
        event.params.data.slug = slugify(`${event.params.data.name} ${event.params.data.lastName}`, {lower: true});
      }
    },
};