/**
 * [description]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {
    "use strict"

    angular
        .module("foyer.authentication.controllers")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["$location", "$scope", "Authentication"];

    /**
     * [LoginController description]
     * @param {[type]} $location      [description]
     * @param {[type]} $scope         [description]
     * @param {[type]} Authentication [description]
     */
    function LoginController($location, $scope, Authentication) {
        var vm = this;

        vm.login = login;

        activate();

        /**
         * [activate description]
         * @return {[type]} [description]
         */
        function activate() {
            if (Authentication.isAuthenticated()) {
                $location.url("/");
            }
        }

        /**
         * [login description]
         * @return {[type]} [description]
         */
        function login() {
            Authentication.login(vm.email, vm.password);
        }
    }
})();
