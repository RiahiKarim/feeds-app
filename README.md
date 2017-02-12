# feeds-app

A simple web app to display the results of a feed into a page, and provide a basic form to filter those results developed in [AngularJS](https://angularjs.org/) with [Material-Design](https://material.angularjs.org/).

#### [Try the DEMO](https://feeds-app.mybluemix.net/)
### Features
  - Select between 10, 25, or 50 maximum results to display.
  - Display most liked videos -- videos that have more than a number of likes.
  - Search videos based on text in the description.
  - Show more if there are more results than what is shown.
  - Mobile support.
  
### Running Locally
1) Checkout git repository locally
```git clone https://github.com/RiahiKarim/feeds-app.git```

2) All the dependencies are included in the libs folder, there is no need for a build process (node, grunt) ...

3) Just navigate to the cloned directory and start a web server (For example on Os X enter the following command
```python -m SimpleHTTPServer 8000```)

4) View ```http://localhost:8000/```in your browser to see the app.

### Configure the app
```javascript
      var values = {
            displayIframeVideos : false,
            defaultDisplayedFeeds : 10,
            popularVideos : 10,
            defaultUserPictureSize : {'height': 75, 'width': 75},
            defaultUserPicturelocation : "images/user_default.png",
            dataLocation : 'data/feeds.json'
        };
```
You can change the configuration of the app. Like hide the Iframe of videos or define when a video will be defined as most liked. See the [list of default configurations](/scripts/providers/config.js).
  
### License
Released under the MIT License. See the [LICENSE](https://github.com/RiahiKarim/feeds-app/blob/master/LICENSE) file for further details.
  
