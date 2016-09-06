(function () {
    'use strict';

    angular
        .module('foyer', [
            'foyer.routes',
            'foyer.authentication',
            'foyer.config',
            'foyer.layout',
            'foyer.posts',
            'foyer.utils'
        ]);

    angular
        .module('foyer.config', []);

    angular
        .module('foyer.routes', ['ngRoute']);

    angular
        .module('foyer')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();
