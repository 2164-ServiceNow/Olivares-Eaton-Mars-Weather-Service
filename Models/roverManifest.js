angular.module('roverManifest', [])
    .component('roverManifest', {
        templateUrl: 'Views/roverManifest.html',
        bindings: {
            rover: '<'
        },
        controller: function($scope, $http) {
            $scope.$watch('$ctrl.rover', function(roverName) {
                let rover;
                if (roverName) {
                    //$http.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName]}?api_key=${apiKey}`) //Server issue, returns 500
                    $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos?sol=1000&api_key=${apiKey}`)
                        .then((response) => {
                            let rover = response.data.photos[0].rover;
                            $scope.name = rover.name;
                            $scope.landingDate = rover.landing_date;
                            $scope.launchDate = rover.launch_date;
                            $scope.status = rover.status;
                            $scope.totalPhotos = rover.total_photos;
                        });
                }
            });
        }
    });