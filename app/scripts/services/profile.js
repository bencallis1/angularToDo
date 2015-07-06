'use strict';

angularToDoApp.factory('Profile', function ($window, FBURL, $firebase, Post, $q) {
  var ref = new $window.Firebase(FBURL);

  var profile = {
    get: function (userId) {
      return $firebase(ref.child('profile').child(userId)).$asObject();
    },
    getPosts: function(userId) {
      var defer = $q.defer();

      $firebase(ref.child('user_posts').child(userId))
        .$asArray()
        .$loaded()
        .then(function(data) {
          var posts = {};

          for(var i = 0; i<data.length; i++) {
            var value = data[i].$value;
            posts[value] = Post.get(value);
          }

          defer.resolve(posts);
        });

      return defer.promise;

    }
  };

  return profile;
});
