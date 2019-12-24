import { Model } from 'backbone';
import Posts from '../collections/posts';
import Page from './Page';
import Home from '../templates/Home.hbs';

export default Page.extend({

  template: Home,

  initialize() {
    if (!this.collection) {
      this.collection = new Posts();
    }
    this.model = new Model({ title: 'My Blog Posts' });
  },

  render() {
    const self = this;
    self.$el.html(self.template({posts: self.collection.toJSON(), title: self.model.get('title')}));
    return self;
  }

});
