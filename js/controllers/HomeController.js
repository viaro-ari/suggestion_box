app.controller('HomeController', ['$scope', 'suggestions', function ($scope, suggestions) {
    $scope.posts = suggestions.posts;
    $scope.alert = '';

    $scope.addSuggestion = function () {
        //If input is empty, don't submit
        if(!$scope.title || $scope.title === '') {
            return;
        }

        // Push suggestion post in suggestions.js
        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,
            comments: []
        });

        // After submit, clear input
        $scope.title = '';
    };

    $scope.upVote = function (post) {
        post.upvotes += 1;
    };
}]);