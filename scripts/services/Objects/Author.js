(function() {
'use strict';

    angular
        .module('feedsApp')
        .factory('Author', Author);

    function Author(feedsAppConfig) {

        //Constructor
        function Author(user){
            this.name = user.name;
            this.link = user.link;
            if(user.pictures)
                this.image = _.find(user.pictures.sizes, feedsAppConfig.defaultUserPictureSize);
            else
                this.image = {link : feedsAppConfig.defaultUserPicturelocation};
        }
        return Author;
    }
})();