'use strict';

var app = angular.module('sendComments');

app.controller('addFeedbackController', function ($scope, $location, $http, $mdDialog, CoreDB) {
    $scope.feedback = {
        email: "",
        comment: ""
    };
    $scope.files = [];
    $scope.error = false;
    $scope.msg = "";
    $scope.submitted = false;
    $scope.loading = false;

    var alert = $mdDialog.alert({
        title: "Thanks!",
        textContent: "Thanks for submitting your feedback to us. We really appreciate it",
        ok: "Close"
    });

    $scope.sendFeedback = function () {
        $scope.loading = true;
        $scope.error = false;
        $scope.msg = "";
        var insetFeedback = {
            email: $scope.feedback.email,
            comment: $scope.feedback.comment,
            images: [],
            senddate: new Date()
        };
        if ($scope.files.length > 3) {
            $scope.error = true;
            $scope.loading = false;
            $scope.msg = "Can only upload up to 3 images at once";
        } else if ($scope.files.length > 0 && $scope.files.length <= 3) {
            var fd = new FormData();
            angular.forEach($scope.files, function (item) {
                fd.append("file[]", item.file, item.name);
            });
            var request = {
                method: "POST",
                url: "https://vgy.me/upload",
                data: fd,
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity
            };

            $http(request)
                .success(function (done) {
                    console.log(done);
                    $scope.loading = false;
                    if (done.upload_list) {
                        angular.forEach(done.upload_list, function (value) {
                            insetFeedback.images.push(value);
                        });
                    } else {
                        insetFeedback.images.push(done.image);
                    }
                    CoreDB.addComment(insetFeedback);
                    $mdDialog.show(alert)
                        .finally(function () {
                            alert = undefined;
                            $location.path("/");
                        })
                })
                .error(function (err) {
                    console.log(err);
                    $scope.error = true;
                    $scope.msg = "ERROR: "+JSON.stringify(err["messages"]);
                    $scope.loading = false;
                });
        } else {
            CoreDB.addComment(insetFeedback);
            $mdDialog.show(alert)
                .finally(function () {
                    alert = undefined;
                    $location.path("/");
                });
        }
    }
});