'use strict';

const api = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'CgpgMC0Wtld60xf2JqkVIeqBDboBvHOmzlSVJIE9';
const app = angular.module('app', []);

// Gets Astronomy Picture of the Day on load
app.controller('backgroundImageController', ($scope, $http) => {
    $scope.bgImg = {};
    $http.get(`${api}${apiKey}`).then((res) => {
        $scope.bgImg = res.data;
    });
});
