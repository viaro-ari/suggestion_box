app.controller('SuggestionController', ['$scope', '$routeParams', '$window', 'suggestions', function ($scope, $routeParams, $window, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function () {
        //If input is empty, don't submit
        if(!$scope.body || $scope.body === '') {
            return;
        }

        // Push comment post to suggestion in suggestions.js
        $scope.post.comments.push({
            body: $scope.body,
            upvotes: 0
        });
    };

    $scope.upVote = function (comment) {
        comment.upvotes += 1;
    }
}]);