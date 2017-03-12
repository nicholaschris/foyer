(function () {

    'use strict';

    angular
        .module('app')
        .service('Authentication', ['$cookies', '$http', function($cookies, $http) {

            var Authentication = {
                getAuthenticatedAccount: getAuthenticatedAccount,
                isAuthenticated: isAuthenticated,
                login: login,
                logout: logout,
                register: register,
                setAuthenticatedAccount: setAuthenticatedAccount,
                unauthenticate: unauthenticate
            };

            return Authentication;

            function getAuthenticatedAccount() {
                if (!$cookies.get('authenticatedAccount')) {
                    return;
              }

                return JSON.parse($cookies.get('authenticatedAccount'));
            }

            function isAuthenticated() {
                return !!$cookies.get('authenticatedAccount');
            }

            function login(email, password) {
                return $http.post('/api/v1/auth/login/', {
                    email: email, password: password
                }).then(loginSuccessFn, loginErrorFn);

                function loginSuccessFn(response) {
                    Authentication.setAuthenticatedAccount(response.data);
                    window.location = '/';
                }

                function loginErrorFn(response) {
                    console.error(response);
                    console.error('Epic failure!');
                }
            }

            function logout() {
                return $http.post('/api/v1/auth/logout/')
                    .then(logoutSuccessFn, logoutErrorFn);

                function logoutSuccessFn(response) {
                    console.log('Logout Success');
                    Authentication.unauthenticate();
                    window.location = '/';
                }

                function logoutErrorFn(response) {
                    console.error(response);
                    console.error('Epic failure!');
                }
            }

            function register(email, password, username) {
                console.log("Register");
                return $http.post('/api/v1/accounts/', {
                    username: username,
                    password: password,
                    email: email
                }).then(registerSuccessFn, registerErrorFn);

                function registerSuccessFn(response) {
                    console.log("registerSuccessFn", response)
                    Authentication.login(email, password);
                }

                function registerErrorFn(response) {
                    console.error("registerErrorFn", response);
                    console.error('Epic failure!');
                }
            }

            function setAuthenticatedAccount(account) {
                $cookies.put('authenticatedAccount', JSON.stringify(account));
            }

            function unauthenticate() {
                console.log($cookies.get('authenticatedAccount'));
                $cookies.remove('authenticatedAccount');
            }

        }])
})();
