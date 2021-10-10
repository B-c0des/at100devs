(function (exports) {

    exports.test = function () {
        return 'Loaded more images';
    };

}(typeof exports === 'undefined' ? this.load = {} : exports));