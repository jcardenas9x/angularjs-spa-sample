'use strict';

var app = angular.module('Administrator');

app.factory('AdminAuthenticator', ['$cookieStore', '$rootScope', 'CoreDB',
    function ($cookieStore, $rootScope, CoreDB) {

        var authService = {
            login: login,
            setCredentials: setCredentials,
            clearCredentials: clearCredentials
        };

        return authService;

        function login (username, password, callback) {
            var user = {
                username: username,
                password: password
            }
            var response = {
                loginSuccess: false,
                message: ""
            };
            CoreDB.getUser(user).then(function (record) {
                if (record) {
                    response["loginSuccess"] = true;
                    response["message"] = "Login success!";
                } else {
                    response["message"] = "Login failed because username or password is incorrect";
                }
                callback(response);
            });
        }

        function setCredentials (username) {
            $rootScope.globals = {
                currentUser: username
            }

            $cookieStore.put('globals', $rootScope.globals);
        }

        function clearCredentials () {
            $rootScope.globals = {
                currentUser: null
            }

            $cookieStore.remove('globals');
        }

    }
]);
