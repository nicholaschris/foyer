(function() {
    'use strict';

    angular
        .module('app')
        .component('navbar', {
            bindings: {
                isAuthenticated: '='
            },
            controller: function(Authentication) {

                var self = this;

                self.logout = logout;

                function logout () {
                    Authentication.logout()
                }

            },
            templateUrl: 'static/javascripts/components/navbar/navbar.template.html'
        })
})();
