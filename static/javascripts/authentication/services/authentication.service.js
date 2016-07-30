(function () {
    'use strict'

    angular
        .module('foyer.authentication.services')
        .factory('Authentication', Authentication)

    Authentication.$inject = ['$cookies', '$http'];

    function Authentication($cookies, $http) {

        var Authentication = {
            login: login,
            logout: logout,
            register: register,
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            setAuthenticatedAccount: setAuthenticatedAccount,
            unAuthenticate: unAuthenticate
        };

        return Authentication;

        function register(email, password, username) {
            return $http.post('/api/v1/accounts/', {
                username: username,
                password: password,
                email: email
            });
        }

        /**
         * @name logout
         * @desc Try to log the user out
         * @returns {Promise}
         * @memberOf thinkster.authentication.services.Authentication
         */
        function logout() {
          return $http.post('/api/v1/auth/logout/')
            .then(logoutSuccessFn, logoutErrorFn);

          /**
           * @name logoutSuccessFn
           * @desc Unauthenticate and redirect to index with page reload
           */
          function logoutSuccessFn(data, status, headers, config) {
            Authentication.unAuthenticate();

            window.location = '/';
          }

          /**
           * @name logoutErrorFn
           * @desc Log "Epic failure!" to the console
           */
          function logoutErrorFn(data, status, headers, config) {
            console.error('Epic failure!');
          }
        }

        function login(email, password) {
            return $http.post("/api/v1/auth/login/", {
                email: email,
                password: password
            }).then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn(data, status, headers, config) {
                Authentication.setAuthenticatedAccount(data.data);

                window.location = "/";
            }

            function loginErrorFn(data, status, headers, config) {
                console.error("Epic failure");
            }
        }

        function getAuthenticatedAccount() {
            if (!$cookies.authenticatedAccount) {
                return
            }

            return JSON.parse($cookies,authenticatedAccount);
        }

        function isAuthenticated() {
            return !!$cookies.authenticatedAccount;
        }

        function setAuthenticatedAccount(account) {
            $cookies.authenticateAccount = JSON.stringify(account);
        }

        function unAuthenticate() {
            delete $cookies.authenticateAccount;
        }
    }
})();
