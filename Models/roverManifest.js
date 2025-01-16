angular.module('roverManifest', [])
    .component('roverManifest', {
        templateUrl: 'Views/roverManifest.html',
        bindings: {
            rover: '<'
        },
        controller: function($scope) {
            $scope.$watch('$ctrl.rover', function(newRover) {
                console.log('executed');
                if (newRover) {
                    $scope.name = newRover.name;
                    $scope.landingDate = newRover.landingDate;
                    $scope.launchDate = newRover.launchDate;
                    $scope.status = newRover.status;
                    $scope.totalPhotos = newRover.totalPhotos;
                }
            });
        }
    });