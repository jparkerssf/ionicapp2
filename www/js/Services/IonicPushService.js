angular.module('IonicPushModule', [])
    .service('IonicPushService', ['$window', '$ionicPush',
        function($window, $ionicPush) {

            var service = this;

            service.registerForPush = function() {
                // kick off the platform web client
                Ionic.io();
                var details = {
  'email': 'email@example.com',
  'password': 'secret'
};

// optionally pass a username
// details.username = 'ionitron';

Ionic.Auth.signup(details).then(signupSuccess, signupFailure);

                // // this will give you a fresh user or the previously saved 'current user'
                // var user = Ionic.User.current();

                // // if the user doesn't have an id, you'll need to give it one.
                // if (!user.id) {
                //     user.id = Ionic.User.anonymousId();
                //     // user.id = 'your-custom-user-id';
                //     // Add some metadata to your user object.
                //     user.set('tk_id', $window.localStorage["userID"])

                // }
                // // Identify your user with the Ionic User Service
                // user.save();


            };


            // Register with the Ionic Push service.  All parameters are optional.
            $ionicPush.init({
                "debug": true,
                "onNotification": function(notification) {
                    var payload = notification.payload;
                    console.log(notification, payload);
                },
                "onRegister": function(data) {
                    console.log(data.token);
                },
                "pluginConfig": {
                    "ios": {
                        "badge": true,
                        "sound": true
                    },
                    "android": {
                        "iconColor": "#343434"
                    }
                }
            });
            $ionicPush.register();


        }
    ]);
