'use strict';

var app = angular.module('sendComments');

app.directive('ngFileParser', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.ngFileParser);
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            element.bind('change', function () {
                var values = [];
                angular.forEach(element[0].files, function (item) {
                    var value = {
                        name: item.name,
                        size: item.size,
                        url: URL.createObjectURL(item),
                        _file: item
                    };
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) 
                        modelSetter(scope, values);
                    else
                        modelSetter(scope, values[0]);
                });
                console.log(values);
            })
        }
    }
}])