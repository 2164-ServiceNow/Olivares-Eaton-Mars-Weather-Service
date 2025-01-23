angular.module('roverImages', [])
    .component('roverImages', {
        templateUrl: 'components/views/roverImages.html',
        controller: function($scope, $http, searchBarService) {
            $scope.$watch(function() {
                return searchBarService.getQuery();
            }, function(newQuery) {
                $scope.value = newQuery;
                if(newQuery !== '') {
                    $http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${newQuery}/photos?sol=1000&api_key=${apiKey}`)
                    .then((response) => {
                        $scope.roverImages = response.data.photos;
                        // for (let r in $scope.roverImages) {
                        //     $http
                        // }
                        let imgUrl = $scope.roverImages[0].img_src;
                        $http.get(imgUrl).then(function (response) {
                            console.log("imageUrl get:")
                            console.log(response.data);
                        })
                        console.log("roverImages controller: ")
                        console.log($scope.roverImages);
                    });
                }
            });
        }
    });