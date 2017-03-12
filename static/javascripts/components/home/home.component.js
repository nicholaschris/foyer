(function (){

    'use strict';

    function HomeController () {
        console.log(this.username);
    }

    angular
        .module('app')
        .component('home', {
            bindings: {
                username: '='
            },
            controller: HomeController,
            templateUrl: 'static/javascripts/components/home/home.template.html',
        })
})();
