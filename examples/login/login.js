/**
 * @file
 * login.js
 */

var login = {
  attributes: {
    id: 'login-form'
  },
  elements: [
    {
      type: 'text',
      attributes: {
        name: 'username',
        placeholder: 'Username'
      },
      prefix: m('p', 'Element prefix.')
    },
    {
      type: 'password',
      attributes: {
        name: 'password',
        placeholder: 'Password'
      },
      suffix: m('p', 'Element suffix.')
    },
    {
      type: 'submit',
      value: 'Sign In'
    }
  ],
  validate: function(form, values) {
    var valid = {
      status: true,
      message: ''
    }

    if (!values.username) {
      valid.status = false;
      valid.message = m('p', 'Please enter a username.');
    }

    if (!values.password) {
      valid.status = false;
      valid.message = m('p', 'Please enter a password.');
    }

    return valid;
  },
  submit: function(form, values) {  
    // Perform login op.
    console.log(values);
  }
}

module.exports = login;