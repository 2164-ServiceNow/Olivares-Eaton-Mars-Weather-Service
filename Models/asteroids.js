angular.module('asteroids', [])
    .component('asteroids', {
        templateUrl: 'Views/asteroids.html',
        controller: function($scope, $http) {
            $scope.t = 'some message';
            $http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`)
                .then(res => {
                    asteroids = [];
                    $scope.asteroids = res.data.near_earth_objects;
                    console.log($scope.asteroids);
                    for (let key in res.data.near_earth_objects){
                        for (let k in res.data.near_earth_objects[key]) {
                            asteroids.push(res.data.near_earth_objects[key][k]);
                        }
                    }
                    console.log(asteroids);
                    $scope.asteroids = asteroids;
                });
        }
    });