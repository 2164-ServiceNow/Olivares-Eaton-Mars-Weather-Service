const rovers = [/*'Sojourner',*/ 'Spirit', 'Opportunity', 'Curiosity', 'Perseverance'];
//const rovers = ['Spirit'];

angular.module('rovers', [])
    .component('rovers', {
        templateUrl: 'Views/rovers.html',
        controller: function($scope, $http) {
            rs = [];
            for(let rover in rovers) {
                $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rovers[rover]}/photos?sol=1000&api_key=CgpgMC0Wtld60xf2JqkVIeqBDboBvHOmzlSVJIE9`)
                .then((response) => {
                    rs.push(response.data.photos[0].rover);
                });
            }
            $scope.rovers = rs;
            $scope.selectRover = function(rover) {
                $scope.selectedRover = rover;
            };
        }
    });