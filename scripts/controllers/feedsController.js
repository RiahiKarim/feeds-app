(function() {
'use strict';

    angular
        .module('feedsApp')
        .controller('feedsCtrl', feedsCtrl);

    feedsCtrl.inject = ['feedsService','feedsAppConfig'];
    function feedsCtrl(feedsService,feedsAppConfig) {
        var vm = this;
        vm.config = feedsAppConfig;
        vm.numberOfFeedsToDisplay = 0;
        vm.defaultViews = [10,25,50];
        vm.showPopular = false;
        vm.search = "";
        vm.feeds = [];
        activate();

         //filter videos  that have more than a number of likes
         //This number is defined in the app config
        vm.popularFeeds = function(){
            return function (feed) {
                if ( vm.showPopular === true){
                    return feed.video.numberLikes > feedsAppConfig.popularVideos;
                }      
                else
                    return true;
            }
        }

        //Load and display  feeds from the data/feeds.json
        function loadAllFeeds(){
            feedsService.getFeeds().then(function(feeds){
                vm.feeds = feeds;
            });
        }

        //on Click 'Show More' Button, load more feeds 
        vm.showMoreFeeds = function(){
            vm.numberOfFeedsToDisplay = vm.defaultViews[vm.defaultViews.indexOf(vm.numberOfFeedsToDisplay) + 1];
        }

        //Load and display a number of feeds feeds from the data/feeds.json
        vm.displayFeeds = function(numberOfFeedsToDisplay){
            vm.numberOfFeedsToDisplay = numberOfFeedsToDisplay;
        };

        //activate this controller and load a default number of feeds
        function activate() { 
            vm.numberOfFeedsToDisplay = feedsAppConfig.defaultDisplayedFeeds;
            loadAllFeeds(feedsAppConfig.defaultDisplayedFeeds);
        };

    }
})();