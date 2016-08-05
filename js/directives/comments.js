app.directive('comments', function () {
    return {
        restrict: 'E',
        scope: {
            comments: '='
        },
        templateUrl: 'js/directives/comments.html'
    }
});