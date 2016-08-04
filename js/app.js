var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        // .when('/post/:id/comment', {
        //     controller: 'CommentController',
        //     templateUrl: 'views/comment.html'
        // })
        .otherwise({
            redirectTo: '/'
        });
}]);