const rovers = [
    /*'Sojourner',*/ 'spirit',
    'opportunity',
    'curiosity',
    'perseverance',
];

angular.module('rovers', []).component('rovers', {
    templateUrl: 'components/views/rovers.html',
    controller: function ($scope) {
        $scope.rovers = rovers;
        $scope.selectedRover = rovers[0];
        $scope.selectRover = function (rover) {
            $scope.selectedRover = rover;
        };
    },
});
