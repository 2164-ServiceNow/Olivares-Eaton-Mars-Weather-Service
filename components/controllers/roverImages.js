angular.module('roverImages', [])
    .component('roverImages', {
        templateUrl: 'components/views/roverImages.html',
        controller: function($scope, $http, searchBarService) {
            console.log("controller")
            $scope.$watch(function() {
                return searchBarService.getQuery();
            }, function(newQuery) {
                $scope.value = newQuery;
                if(newQuery !== '') {
                    console.log('if');
                    console.log('a')
                    let x = `https://api.nasa.gov/mars-photos/api/v1/rovers/${newQuery}/photos?sol=1000&api_key=${apiKey}`
                    console.log(x);
                    $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${newQuery}/photos?sol=1000&api_key=${apiKey}`)
                    // $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/`)
                    .then((response) => {
                        $scope.roverImages = response.data.photos;
                        console.log("roverImages controller: ")
                        console.log($scope.roverImages);
                    })
                    .finally(() => console.log('broken'));
                    console.log('after')
                }
            });
        }
    });