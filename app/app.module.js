'use strict';

angular.module('spaFeedbackApp', [
    'ngMaterial',
    'ngMessages',
    'ngRoute',
    'ngCookies',
    'lokijs',
    'core',
    'core.db',
    'Administrator',
    'sendComments'
]).run(['$rootScope', '$location', '$cookieStore', 'CoreDB',
    function ($rootScope, $location, $cookieStore, CoreDB) {
        CoreDB.initDB();
        $rootScope.globals = $cookieStore.get('globals') || { currentUser: null };
        console.log($rootScope.globals);
    }
]);