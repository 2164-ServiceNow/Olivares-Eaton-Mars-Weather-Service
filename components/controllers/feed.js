const nasaImageAndVideoLibrary =
    'https://images-api.nasa.gov/search?q=mars&page=1&page_size=10&media_type=video&year_start=1920&year_end=2025';
const feed = angular.module('feed', []);

feed.component('feed', {
    templateUrl: 'components/views/feed.html',
    controller: ($scope, $http, scrollService) => {
        $scope.items = [];
        $scope.next = '';

        // Get first list of videos
        $http
            .get(nasaImageAndVideoLibrary)
            .then((res) => {
                $scope.items = res.data.collection.items;
                $scope.next = res.data.collection.links[0].href;
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

        // Load more on scroll end (Infinite Scroll)
        $scope.$watch(
            function () {
                return scrollService.getScroll();
            },
            function (data) {
                if (
                    scrollService.getHeight() -
                        data -
                        scrollService.getViewportHeight() <
                    0
                ) {
                    $http.get($scope.next).then((res) => {
                        $scope.items = [
                            ...$scope.items,
                            ...res.data.collection.items,
                        ];
                    });
                }
            }
        );
    },
});
