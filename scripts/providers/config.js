(function() {
    'use strict';
    angular.module('feedsApp').provider('feedsAppConfig', function() {

        var values = {
            displayIframeVideos : false, // if true display the embed videos in an Iframe
            defaultDisplayedFeeds : 10, // default view is 10 results
            popularVideos : 10, //10 Likes
            defaultUserPictureSize : {'height': 75, 'width': 75},
            defaultUserPicturelocation : "images/user_default.png",
            dataLocation : 'data/feeds.json'
        };

        return {
            $get: function() {
                return values;
            },
            set: function (constants) {
                angular.extend(values, constants);
            }
        };

    });
})();