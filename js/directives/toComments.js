app.directive('toComments', function () {
    return {
        restrict: 'E',
        scope: {
            post: '=',
            index: '='
        },
        templateUrl: 'js/directives/toComments.html'
    }
})