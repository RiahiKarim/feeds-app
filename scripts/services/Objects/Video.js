(function() {
'use strict';

    angular
        .module('feedsApp')
        .factory('Video', Video);
    //Video model definition
    function Video() {
        
        function Video(data){
            this.name = data.name;
            this.link  = data.link;
            this.embedVideo = data.embed.html;
            this.description = data.description || "";
            this.numberPlays = data.stats.plays;
            this.numberComments = data.metadata.connections.comments.total;
            this.numberLikes = data.metadata.connections.likes.total;
        }

         //Return the constructor function
        return Video;
    }
})();