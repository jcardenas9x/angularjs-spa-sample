'use strict';

angular.module('spaFeedbackApp', [
    'ngMaterial',
    'ngMessages',
    'ngRoute',
    'ngCookies',
    'lokijs',
    'core',
    'core.db',
    'Administrator'
]).run(['$rootScope', '$location', '$cookieStore', 
    function ($rootScope, $location, $cookieStore) {
        $rootScope.globals = $cookieStore.get('globals') || { currentUser: null };
    }
]);