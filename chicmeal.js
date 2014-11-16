
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.app.helpers({
    restaurants: [
      { name: "Hells Kitchen",  },
      { name: "No Frill Grill" },
      { name: "Omar's Carriage House" }
    ]
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
