# mithril.form
Provides a Mithril based form constructor with managed submit and validation handlers.

This component takes a different tact from other (mithril based) form examples I have seen. Instead of binding to the onChange event we simply wait for the user to trigger the submit handler and then act. However one could easily pass additional attributes to each form element;

```javascript
var textForm = {
  attributes: {
  	class: 'form',
  	config: animation.fadeIn
  },
  elements: [
    {
      type: 'text',
      title: 'Text input',
      attributes: {
        name: 'submit_key',
        config: animation.fadeIn
      }
    }
  ],
  validate: function(form, values) {
    var valid = {
      status: true,
      message: ''
    }

    return valid;
  },
  submit: function(form, values) {  

  }
}
```