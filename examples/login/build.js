/**
 * @file
 * build.js
 */

var form = require('../../mithril.form.js');
var login = require('./login.js');

var app = {
  controller: function() {
    // @see login.js
  },
  view: function(ctrl) {
    return m('.example', [
      m.component(form, login)
    ])
  }
}

m.mount(document.body, app);