/**
 * @file
 * build.js
 */

var form = require('../../mithril.form.js');
var newsletter = require('./newsletter.js');

var app = {
  controller: function() {
    // @see newsletter.js
  },
  view: function(ctrl) {
    return m('.example', [
      m.component(form, newsletter)
    ])
  }
}

m.mount(document.body, app);