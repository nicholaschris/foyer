(function () {
    'use strict'

    angular
        .module('foyer.authentication', [
            'foyer.authentication.controllers',
            'foyer.authentication.services'
        ]);

    angular
        .module('foyer.authentication.controllers', [])

    angular
        .module('foyer.authentication.services', ['ngCookies'])

})();
