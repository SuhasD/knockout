define(['jquery', 'knockout', './router', 'bootstrap'], function ($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('account-page', {
    template: { require: 'text!components/account-page/account.html' }
  });
  
  ko.components.register('listing-page', { require: 'components/listing-page/plp'});
  ko.components.register('product-page', { require: 'components/product-page/pdp'});
  ko.components.register('cart-page', { require: 'components/cart-page/cart' });

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
