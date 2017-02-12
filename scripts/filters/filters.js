(function () {
    'use strict';

    angular
        .module('feedsApp')
        .filter('trustHTML', function ($sce) {
            return function Filter(htmlCode) {
                var e = document.createElement('div');
                e.innerHTML = htmlCode;
                return $sce.trustAsHtml(e.childNodes[0].nodeValue);
            }
        })
        //simple  filter that makes big numbers into short format() 1 milion becomes 1m and 1122 becomes 1.1k )
        .filter('shortNumber', function () {
            return function (number) {
                if (number) {
                    if (number >= Math.pow(10, 12)) {
                        // trillion
                        number = (number / Math.pow(10, 12)).toFixed(1) + "T";
                    } else if (number < Math.pow(10, 12) && number >= Math.pow(10, 9)) {
                        // billion
                        number = (number / Math.pow(10, 9)).toFixed(1) + "B";
                    } else if (number < Math.pow(10, 9) && number >= Math.pow(10, 6)) {
                        // million
                        number = (number / Math.pow(10, 6)).toFixed(1) + "M";
                    } else if (number < Math.pow(10, 6) && number >= Math.pow(10, 3)) {
                        // thousand
                        number = (number / Math.pow(10, 3)).toFixed(1) + "K";
                    }
                    return number;
                }
            };
        });
})();