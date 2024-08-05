const slugify = require('slugify');

module.exports = {
    // custom slug generation only happens on create
    // this is because we want to allow the user to change it later
    async beforeCreate(event) {
      if (event.params.data.name && event.params.data.lastName) {
        event.params.data.slug = slugify(`${event.params.data.name} ${event.params.data.lastName}`, {lower: true});
      }
    },
};