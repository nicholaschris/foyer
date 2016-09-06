(function () {
  'use strict';

  angular
    .module('foyer.posts', [
      'foyer.posts.controllers',
      'foyer.posts.directives',
      'foyer.posts.services'
    ]);

  angular
    .module('foyer.posts.controllers', []);

  angular
    .module('foyer.posts.directives', ['ngDialog']);

  angular
    .module('foyer.posts.services', []);
})();
