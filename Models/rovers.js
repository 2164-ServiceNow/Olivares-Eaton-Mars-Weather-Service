angular.module('rovers', [])
    .component('rovers', {
        templateUrl: 'Views/rovers.html',
        controller: function($scope, $http) {
            $scope.rovers = "rover List";
            $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
        //    $http.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=DEMO_KEY`)
            .then((response) => {
                $scope.rovers = Object.keys(response.data.photos['1']['rover']);
                console.log("success")
            });
        }
    });