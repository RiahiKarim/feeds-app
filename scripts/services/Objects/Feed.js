(function () {
    'use strict';

    angular
        .module('feedsApp')
        .factory('Feed', Feed);

    Feed.inject = ['Author','Video'];
    //Feed model definition
    function Feed(Author,Video) {

        //Constructor
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

        //This static function is a response transformers to handle complex response data from the API 
        //It allows to verify the response data and enhance it with additional properties
        Feed.apiResponseTransformer = function (responseData) {
            return responseData.data.data
                    .map(Feed.build);
        };
        
        //Return the constructor function
        return Feed;
    }
})();