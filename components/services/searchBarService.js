angular.module('app')
    .service('searchBarService', function() {
        this.query = '';
        this.setQuery = function(query) {
            this.query = query;
        }
        this.getQuery = function() {
            console.log('get')
            return this.query;
        }
    });