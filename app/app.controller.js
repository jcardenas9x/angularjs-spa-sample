'use strict';

var app = angular.module('spaFeedbackApp');

app.controller('MenuCtrl', function MenuResponsiveCtrl() {
    var originEvent;

    this.openMenu = function ($mdOpenMenu, ev) {
        originEvent = ev;
        $mdOpenMenu(ev);
    };
});