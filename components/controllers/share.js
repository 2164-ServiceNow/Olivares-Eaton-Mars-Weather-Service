const share = angular.module('share', []);

share.component('share', {
    templateUrl: 'components/views/share.html',
    controller: function () {
        Shareon.init();
    },
});
