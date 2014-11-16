Orders = new Mongo.Collection("orders");
restaurants = new Mongo.Collection("restaurants");



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.app.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });


  // At the bottom of the client code
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
