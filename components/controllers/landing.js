angular.module("landing", [])
    .component("landing", {
        templateUrl: "components/views/landing.html",
        controller: function($scope, $http) {
            // $http.get(`https://api.nasa.gov/mars-wmts/catalog/curiosity_ctx_mosaic/1.0.0/default/default028mm/0/0/0.jpg`)
            console.log("start");
            // $scope.$watch('$ctrl.landing', function(roverName) {            
                $http.get({method: 'Get', url:`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos?sol=1000&api_key=${apiKey}`})
                    .then((res) => {
                        console.log("res");
                        console.log(res.data);
                    });
            // });
        }
    });