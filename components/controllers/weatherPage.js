const weatherApi2 = 'https://api.nasa.gov/insight_weather/?api_key=';

angular
    .module('weatherPage', [])
    .controller('weatherController', function ($scope, $http, weatherService) {
        $scope.someWeather = 'the weather sucks!';
        $scope.weatherDates = [];
        $scope.weatherData = {};
        $scope.index = null;
        $scope.selected = null;

        $http
            .get(`${weatherApi2}${apiKey}&feedtype=json&ver=1.0`)
            .then((res) => {
                let keys = res.data.sol_keys;
                let today = res.data.sol_keys.slice(-1)[0];
                let data = res.data[today];
                $scope.index = today;

                for (const key of keys) {
                    let item = res.data[key];
                    $scope.weatherDates.push({
                        firstDate: item.First_UTC,
                        lastDate: item.Last_UTC,
                        sol: key,
                        season: item.Season,
                        atemp: item.AT.av,
                        hws: item.PRE.av,
                        pre: item.HWS.av,
                        wd: item.WD.most_common.compass_point,
                    });
                }

                weatherService.setWeatherData(
                    $scope.weatherDates,
                    data.First_UTC,
                    data.Last_UTC,
                    today,
                    data.Season,
                    data.AT.av,
                    data.HWS.av,
                    data.PRE.av,
                    data.WD.most_common.compass_point
                );
            })
            .then(() => {
                $scope.weatherData = weatherService.getWeatherData();
                $scope.$watch(
                    function () {
                        return $scope.index;
                    },
                    function (data) {
                        for (const item of $scope.weatherData.weatherDates) {
                            if (Object.values(item).indexOf(data) > -1) {
                                $scope.selected = item;
                                console.log(data);
                            }
                        }
                    }
                );
            });
    });
