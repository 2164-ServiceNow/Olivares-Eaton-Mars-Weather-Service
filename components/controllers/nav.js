const navigation = angular.module('navigation', []);

navigation.component('navigation', {
    templateUrl: 'components/views/nav.html',
    controller: function ($scope, $location) {
        $scope.location = $location;
        $scope.nav = [
            { url: '/', name: 'Weather', icon: 'fa-temperature-quarter' },
            { url: '/rovers', name: 'Rovers', icon: 'fa-robot' },
            { url: '/videos', name: 'Videos', icon: 'fa-video' },
            { url: '/images', name: 'Images', icon: 'fa-image' },
            // { url: '/asteroids', name: 'Asteroids'}
        ];
    },
});
