const nasaImageAndVideoLibrary =
    'https://images-api.nasa.gov/search?q=mars&page=1&page_size=10&media_type=video&year_start=1920&year_end=2025';
const feed = angular.module('feed', []);

feed.component('feed', {
    templateUrl: 'components/views/feed.html',
    controller: ($scope, $http) => {
        $scope.items = [];
        $scope.videos = [];

        $http
            .get(nasaImageAndVideoLibrary)
            .then((res) => {
                $scope.items = res.data.collection.items;
            })
            .then(() => {
                if ($scope.items.length > 0) {
                    for (const item of $scope.items) {
                        $http.get(item.href).then((res) => {
                            item.video = res.data[0];
                        });
                    }
                }
            });
    },
});
