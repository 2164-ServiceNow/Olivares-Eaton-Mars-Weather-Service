const navigation = angular.module('navigation', []);

navigation.component('navigation', {
    templateUrl: 'components/views/nav.html',
    controller: function ($scope, $location) {
        $scope.location = $location;
        $scope.nav = [
            { url: '/', name: 'Home', icon: 'fa-home' },
            { url: '/videos', name: 'Videos', icon: 'fa-video' },
        ];
    },
});
