import Backbone from 'backbone';
import Post from '../models/post';

const data = [
  { date: new Date(), title: 'post 1', content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
  { date: new Date(), title: 'post 2', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'}
];

export default Backbone.Collection.extend({

  model: Post,

  initialize() {
    this.set(data);
  }

});
