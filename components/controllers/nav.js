const navigation = angular.module('navigation', []);

navigation.component('navigation', {
    templateUrl: 'components/views/nav.html',
    controller: ($scope) => {
        $scope.nav = [
            { url: '/', name: 'Home' },
            { url: '#!/videos', name: 'Videos' },
        ];
    },
});
