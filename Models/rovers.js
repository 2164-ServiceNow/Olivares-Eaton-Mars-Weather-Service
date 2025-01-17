const rovers = [/*'Sojourner',*/ 'Spirit', 'Opportunity', 'Curiosity', 'Perseverance'];

angular.module('rovers', [])
    .component('rovers', {
        templateUrl: 'Views/rovers.html',
        controller: function($scope) {
            $scope.rovers = rovers;
            $scope.selectRover = function(rover) {
                $scope.selectedRover = rover;
            };
        }
    });