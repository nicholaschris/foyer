(function() {
    "use strict"

    angular
        .module('app')
        .component('register', {
            templateUrl: 'static/javascripts/components/register/register.template.html',
            controller: function ($location, Authentication) {
                var vm = this;

                vm.register = register;

                activate();

                function activate() {
                    // If the user is authenticated, they should not be here.
                    if (Authentication.isAuthenticated()) {
                        $location.url('/');
                    }
                }

                function register() {
                    console.log("Attempt to register");
                    Authentication.register(vm.email, vm.password, vm.username);
                }
            }
        });
})();
