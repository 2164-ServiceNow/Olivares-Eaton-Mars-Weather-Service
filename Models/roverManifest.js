angular.module('roverManifest', [])
    .component('roverManifest', {
        templateUrl: 'Views/roverManifest.html',
        bindings: {
            rover: '<'
        },
        controller: function($scope) {
            $scope.$watch('$ctrl.rover', function(newRover) {
                if (newRover) {
                    $scope.name = newRover.name;
                    $scope.landingDate = newRover.landing_date;
                    $scope.launchDate = newRover.launch_date;
                    $scope.status = newRover.status;
                    $scope.totalPhotos = newRover.total_photos;
                }
            });
        }
    });