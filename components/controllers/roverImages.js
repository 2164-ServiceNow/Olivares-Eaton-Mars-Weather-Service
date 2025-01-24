
angular.module('roverImages', [])
    .component('roverImages', {
        templateUrl: 'components/views/roverImages.html',
        controller: function($scope, $http, searchBarService) {
            $scope.roverImages = true;
            $scope.$watch(function() {
                return searchBarService.getQuery();
            }, searchImages);
            $scope.$watch('sol', searchImages($scope.value));
            function searchImages(newQuery) {
                console.log(newQuery);
                if(newQuery !== '' && newQuery) {
                    console.log(newQuery);
                    let roverName = newQuery[0];
                    let sol = newQuery[1];
                    if (rovers.includes(roverName.toLowerCase())) {
                        $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${apiKey}`)
                        .then((response) => {
                            $scope.roverImages = response.data.photos;
                        });
                    } else {
                        $scope.roverImages = false;
                        $scope.invalidName = roverName;
                    }
                }
            }
        }
    });