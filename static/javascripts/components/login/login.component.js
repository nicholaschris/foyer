(function() {
    "use strict"

    angular
        .module('app')
        .component('login', {
            templateUrl: 'static/javascripts/components/login/login.template.html',
            controller: function ($location, Authentication) {

                console.log("login component");
                var self = this;

                self.email = '';
                self.password = '';
                self.login = login;

                activate();

                function activate() {
                    if (Authentication.isAuthenticated()) {
                        $location.url("/");
                    }
                }

                function login() {
                    Authentication.login(self.email, self.password);
                }
            }
        });
})();
