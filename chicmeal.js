
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Template.app.helpers({
    restaurants: [
      {
        name: "Hells Kitchen",
        location: "downtown norfolk",
        meals: [

        ]
      },
      {
        name: "No Frill Grill",
        location: "ghent norfolk",
        meals: [

        ]
      },
      { name: "Omar's Carriage House",
        location: "bute norfolk",
        meals: [

      ]}
    ],
  });

  Template.app.events({
    'click .btn': function (event){
      console.log(buying, this.restaurant);
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
