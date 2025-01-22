angular.module('searchBar', [])
    .component('searchbar', {
        templateUrl: 'components/views/searchBar.html',
        controller: function searchBarController($scope, searchBarService) {
            $scope.searchValue = "";
            $scope.search = function() {
                searchBarService.setQuery($scope.searchValue);
            }
        }
    });