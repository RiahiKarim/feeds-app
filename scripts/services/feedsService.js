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
        function getFeeds(numberOfFeeds) { 
            return $http({method: 'GET', url: feedsAppConfig.dataLocation }).then(
                function(responseData){
                     return Feed.apiResponseTransformer(responseData,numberOfFeeds);
                }
            );
        }
    }
})();