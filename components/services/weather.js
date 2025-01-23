angular.module('app').service('weatherService', function () {
    this.weatherDates = [];
    this.selected = {};

    this.setWeatherData = (
        list,
        firstDate,
        lastDate,
        sol,
        season,
        atemp,
        hws,
        pre,
        wd
    ) => {
        this.weatherDates = list;
        this.selected = {
            firstDate,
            lastDate,
            sol,
            season,
            atemp,
            hws,
            pre,
            wd,
        };
    };

    this.getWeatherData = () => {
        return {
            weatherDates: this.weatherDates,
            selected: this.selected,
        };
    };
});
