(function() {
'use strict';

    angular
        .module('feedsApp')
        .controller('feedsCtrl', feedsCtrl);

    feedsCtrl.inject = ['feedsService','feedsAppConfig'];
    function feedsCtrl(feedsService,feedsAppConfig) {
        var vm = this;
        vm.config = feedsAppConfig;
        vm.feeds = [];
        vm.loadFeeds = loadFeeds;
        activate();

        vm.popularFeeds = function(){
            return function (feed) {
                //filter videos from users that have more than 10 likes
                if ( vm.showPopular === true){
                    return feed.video.numberLikes > feedsAppConfig.popularVideos;
                }      
                else
                    return true;
            }
        }

        ////////////////
        function loadFeeds(numberOfFeedsToLoad){
            vm.displayedFeeds = numberOfFeedsToLoad;
            feedsService.getFeeds(vm.displayedFeeds).then(function(feeds){
                vm.feeds = feeds;
            });
        };

        function activate() { 
            vm.loadFeeds(feedsAppConfig.defaultDisplayedFeeds);
        };

    }
})();