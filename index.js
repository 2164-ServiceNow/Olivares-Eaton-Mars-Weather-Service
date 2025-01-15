'use strict';

const api = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'CgpgMC0Wtld60xf2JqkVIeqBDboBvHOmzlSVJIE9';
const app = angular.module('app', []);

// Gets Astronomy Picture of the Day on load
app.controller('backgroundImageController', ($scope, $http) => {
    $scope.bgImg = {};
    // $http.get(`${api}${apiKey}`).then((res) => {
    //     $scope.bgImg = res.data;
    // });
});

const weatherApi = 'https://api.nasa.gov/insight_weather/?api_key=';

app.controller('weatherController', ($scope, $http) => {
    $scope.weather = {};
    $http.get(`${weatherApi}DEMO_KEY&feedtype=json&ver=1.0`).then((res => {
        let key = res.data.sol_keys.slice(-1)[0];
        let data = res.data[key]
        $scope.sol = key
        $scope.season = data.Season;
        $scope.at = data.AT.av;
        $scope.hws = data.PRE.av;
        $scope.pre = data.HWS.av;
        $scope.wd = data.WD.most_common.compass_point;
    }));
    $scope.weather = "1";
});