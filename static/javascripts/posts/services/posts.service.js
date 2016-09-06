(function() {
    'use strict';

    angular
        .module('foyer.posts.services')
        .factory('Posts', Posts)

    Posts.$inject = ['$http'];

    function Posts($http) {
        var Posts = {
            all: all,
            create: create,
            get: get
        };

        return Posts;

        function all() {
            return $http.get('/api/v1/posts/');
        }

        function create() {
            return $http.post('/api/v1/posts/', {
                content: content
            });
        }

        function get() {
            return $http.get('/api/v1/accounts/' + username + '/posts/')
        }
    }


})();
