(function() {
'use strict';

    angular
        .module('feedsApp')
        .factory('feedsService', feedsService);

    feedsService.inject = ['$http','Feed','feedsAppConfig'];
    function feedsService($http, Feed, feedsAppConfig) {
        var service = {
            getFeeds:getFeeds
        };
        
        return service;

        ////////////////
        function getFeeds() { 
            return $http({method: 'GET', url: feedsAppConfig.dataLocation })
            //Passed the apiResponseTransformer as a callback function to then().
            //The goal is to have all of the feeds returned by the API to be mapped to our Feed model. 
                    .then(Feed.apiResponseTransformer);
        }
    }
})();