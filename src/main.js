import Vue from 'vue'

import TheSubscriptionAlert from './components/TheSubscriptionAlert'
import app from 'corteza-webapp-admin/src/app'
import './themes'

// When you run this in development mode with corteza repository/package linked
// (yarn link ...) it tries to work with 2 instances of vue and throws:
//
// Unknown custom element: <the-subscription-alert> - did you register the component
// correctly? For recursive components, make sure to provide the "name" option.
Vue.component('the-subscription-alert', TheSubscriptionAlert)

app({
  // Extending base Admin app with an additional header to handle
  // subscription notifications
  template: `<div id="admin" class="crust"><the-subscription-alert /><router-view/></div>`,
})
