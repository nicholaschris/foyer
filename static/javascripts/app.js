(function() {

    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngCookies'
        ])

    angular
        .module('app.routes', ['ui.router'])

    angular
        .module('app')
        .config(['$stateProvider', function($stateProvider) {

            var states = [
                // {
                //     name: 'root',
                //     url: '/',
                //     component: 'root'
                // },
                // {
                //     name: 'home',
                //     url: '/',
                //     component: 'home'
                // },
                {
                    name: 'login',
                    url: '/login',
                    component: 'login'
                },
                {
                    name: 'register',
                    url: '/register',
                    component: 'register'
                }
            ]

            states.forEach(function(state) {
                console.log("Add state: ", state.name, state.component)
                $stateProvider.state(state);
            });
        }])

        angular
            .module('app')
            .run(run)

        run.$inject = ['$http'];

        function run($http) {
            $http.defaults.xsrfHeaderName = 'X-CSRFToken';
            $http.defaults.xsrfCookieName = 'csrftoken';
        }


})();
