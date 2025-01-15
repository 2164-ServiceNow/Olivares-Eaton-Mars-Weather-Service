'use strict';

const api = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'CgpgMC0Wtld60xf2JqkVIeqBDboBvHOmzlSVJIE9';
const app = angular.module('app', ['ngRoute', 'weatherPage', 'weather', 'rovers']);

// Gets Astronomy Picture of the Day on load
app.controller('backgroundImageController', ($scope, $http) => {
    $scope.bgImg = {};
    // $http.get(`${api}${apiKey}`).then((res) => {
    //     $scope.bgImg = res.data;
    // });
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/weather", {
        templateUrl: "Views/weatherPage.html"
    })
    .when("/rovers", {
        templateUrl: "Views/roverPage.html"
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});