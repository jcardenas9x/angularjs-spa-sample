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
                when('/add', {
                    controller: 'addFeedbackController',
                    templateUrl: '../comments/comments.partial.html',
                    controllerAs: 'feedbackVM'
                }).
                when('/admin', {
                    controller: 'AdminController',
                    templateUrl: '../admin/admin.partial.html',
                    controllerAs: 'adminVM'
                })
                .otherwise('/home');
        }
    ]);