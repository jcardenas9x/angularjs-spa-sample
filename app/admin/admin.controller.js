'use strict';

var app = angular.module('Administrator');

app.controller('AdminController', function ($scope, $rootScope, $route, AdminAuthenticator) {

    $scope.dataLoading = false;
    $scope.username = "";
    $scope.password = "";
    $scope.errorMsg = false;

    $scope.login = function () {
        $scope.isLoading = true;
        $scope.errorMsg = false;
        AdminAuthenticator.login($scope.username, $scope.password, 
            function (response) {
                if (response.loginSuccess) {
                    AdminAuthenticator.setCredentials($scope.username);
                    $route.reload();
                } else {
                    $scope.errorMsg = response["message"];
                    $scope.dataLoading = false;
                }
            }    
        )
    }

    $scope.logout = function () {
        AdminAuthenticator.clearCredentials();
        $route.reload();
    }

});