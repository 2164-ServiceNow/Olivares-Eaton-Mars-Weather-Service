// Scroll event listener
angular
    .module('app')
    .directive('onScroll', ($window, $document, scrollService) => {
        return (scope, element, attrs) => {
            angular.element($window).bind('scroll', function () {
                scrollService.setScrollData(
                    this.innerHeight,
                    angular.element($document[0].querySelector('body'))[0]
                        .scrollHeight,
                    this.scrollY
                );
                scope.$apply();
            });
        };
    });
