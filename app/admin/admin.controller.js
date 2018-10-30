'use strict';

var app = angular.module('Administrator');

app.controller('AdminController', function ($scope, $rootScope, $route, AdminAuthenticator, CoreDB) {

    $scope.dataLoading = false;
    $scope.username = "";
    $scope.password = "";
    $scope.errorMsg = false;
    $scope.showSingleComment = false;
    $scope.highlightComment = {
        email: "",
        comment: "",
        images: [],
        senddate: null
    };

    CoreDB.getComments().then(function (result) {
        $rootScope.commentList = result;
    });

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

    $scope.highlight = function (item) {
        $scope.highlightComment = item;
        $scope.showSingleComment = true;
    }

    $scope.return = function () {
        $scope.highlightComment = {
            email: "",
            comment: "",
            images: [],
            senddate: null
        };
        $scope.showSingleComment = false;
    }

});