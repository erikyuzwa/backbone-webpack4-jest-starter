import Backbone from 'backbone';

export default Backbone.Model.extend({

  defaults: {
    content: 'default content',
    date: new Date(),
    title: 'default title'
  },

  initialize() {

  }

});
