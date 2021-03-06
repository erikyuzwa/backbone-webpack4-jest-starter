import Backbone from 'backbone';
import About from './views/About';
import Home from './views/Home';
import Routes from './routes/routes';

function showView(view) {
  view.render();
}

export default Backbone.Router.extend({

  routes: Routes,

  home() {
    showView(new Home());
  },

  about() {
    showView(new About());
  }

});
