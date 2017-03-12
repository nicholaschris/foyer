(function() {

    'use strict';

    angular
        .module('app')
        .component('root', {
            templateUrl: 'static/javascripts/components/root/root.template.html',
            controller: ['Authentication', function(Authentication) {

                console.log("Root component");

                var self = this;

                this.isAuthenticated = Authentication.isAuthenticated();
                if (this.isAuthenticated) {
                    this.username = Authentication.getAuthenticatedAccount().username;
                    console.log(this.username)
                } else {
                    this.username = 'Anonymous'
                }

            }]
        })
})();
