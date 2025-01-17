const weatherApi2 = 'https://api.nasa.gov/insight_weather/?api_key=';

angular.module('weather', [])
    .component('weather', {
        templateUrl: 'Views/weather.html',
        controller: function($scope, $http) {
            $scope.someWeather = "the weather sucks!";
            console.log("executed");
            $http.get(`${weatherApi2}DEMO_KEY&feedtype=json&ver=1.0`).then((res => {
                let key = res.data.sol_keys.slice(-1)[0];
                let data = res.data[key]
                $scope.sol = key
                $scope.season = data.Season;
                $scope.at = data.AT.av;
                $scope.hws = data.PRE.av;
                $scope.pre = data.HWS.av;
                $scope.wd = data.WD.most_common.compass_point;
            }));
        }
    });