'use strict';

var app = angular.module('Administrator');

app.controller('AdminController', function ($scope, $rootScope, $location, AdminAuthenticator) {

    $scope.login = function () {
        $scope.isLoading = true;
        AdminAuthenticator.login($scope.username, $scope.password, 
            function (response) {
                if (response.success) {
                    AdminAuthenticator.setCredentials($scope.username);
                } else {
                    $scope.error = response["message"];
                    $scope.dataLoading = false;
                }
            }    
        )
    }

});