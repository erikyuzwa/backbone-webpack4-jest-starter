import 'lodash';
import 'bootstrap';
import Backbone from 'backbone';
import Router from './Router';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/app.scss';

$(function() {
  new Router();
  Backbone.history.start();
});

