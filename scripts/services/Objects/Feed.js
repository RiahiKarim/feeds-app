(function () {
    'use strict';

    angular
        .module('feedsApp')
        .factory('Feed', Feed);

    Feed.inject = ['Author','Video'];
    function Feed(Author,Video) {

        /**
         * Constructor
         */
        function Feed(author, video) {
            this.author = author;
            this.video = video;
        }

        Feed.build = function (data) {
            return new Feed(
                new Author(data.user),
                new Video(data)
            );
        };

        Feed.apiResponseTransformer = function (responseData, numberFeeds) {
            return responseData.data.data
                    .slice(0,numberFeeds)
                    .map(Feed.build);
        };

        return Feed;
    }
})();