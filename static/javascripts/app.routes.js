(function() {

    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(['$stateProvider', function($stateProvider) {

            var states = [
                {
                    name: 'home',
                    url: '/',
                    component: 'home'
                },
                {
                    name: 'login',
                    url: '/login',
                    template: '<login></login>'
                    // component: 'login'
                },
                {
                    name: 'register',
                    url: '/register',
                    component: 'register'
                }
            ]

            states.forEach(function(state) {
                console.log("Add state: ", state.name)
                $stateProvider.state(state);
            });
        }])
})();
