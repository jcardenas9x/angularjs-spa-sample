'use strict';

angular.module('spaFeedbackApp')
    .config(['$locationProvider', '$routeProvider', 
        function config ($locationProvider, $routeProvider) {
            $locationProvider
            .html5Mode(false)
            .hashPrefix('!');

            $routeProvider.
                when('/home', {
                    templateUrl: '../home/home.html'
                }).
                when('/admin', {
                    templateUrl: '../admin/admin.partial.html'
                })
                .otherwise('/home');
        }
    ]);