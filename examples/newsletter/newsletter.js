/**
 * @file
 * newsletter.js
 *
 * @form: newsletter form.
 */

/**
 * Newsletter form model.
 */
var newsletter = {
  elements: [
    {
      type: 'text', 
      attributes: {
        name: 'email',
        placeholder: 'Email Address'
      }
    },
    {
      type: 'submit',
      value: 'Sign Up',
      attributes: {
        class: 'submit'
      }
    }
  ],
  validate: function(form, values) {
    var valid = {
      status: true,
      message: ''
    }

    var re = /\S+@\S+\.\S+/;
    if (!values.email || !re.test(values.email)) {
      valid.status = false;
      valid.message = m('p', 'Please enter a valid email address.');
    }

    return valid;
  },
  submit: function(form, values) {
    // Act on submission values.
    console.log(values);
  }
}

module.exports = newsletter;