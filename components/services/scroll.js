angular.module('app').service('scrollService', function () {
    this.vh = 0;
    this.scrollHeight = 0;
    this.scrollY = 0;

    this.setScrollData = (vh, height, y) => {
        this.vh = vh;
        this.scrollHeight = height;
        this.scrollY = y;
    };

    this.getViewportHeight = () => this.vh;
    this.getHeight = () => this.scrollHeight;
    this.getScroll = () => this.scrollY;
});
