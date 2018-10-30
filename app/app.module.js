'use strict';

angular.module('spaFeedbackApp', [
    'ngMaterial',
    'ngMessages',
    'ngRoute',
    'ngAnimate',
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
        CoreDB.getComments().then(function (result) {
            $rootScope.commentList = result;
        });
    }
]);