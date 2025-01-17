'use strict';
const apod = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'CgpgMC0Wtld60xf2JqkVIeqBDboBvHOmzlSVJIE9';
const app = angular.module('app', ['ngRoute', 'navigation', 'feed']);

// Gets Astronomy Picture of the Day on load
app.controller('backgroundImageController', function ($scope, $http) {
    $scope.bgImg = {};
    $http.get(`${apod}${apiKey}`).then((res) => {
        $scope.bgImg = res.data;
    });
});

// Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
        })
        .when('/videos', {
            templateUrl: 'pages/videos.html',
        });
});
