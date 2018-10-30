'use strict';

var app = angular.module('sendComments');

app.controller('addFeedbackController', function ($scope, $location, CoreDB) {
    $scope.feedback = {
        email: "your@email.com",
        comment: "Your feedback goes here"
    };
    $scope.submitted = false;
    $scope.loading = false;
});