
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Template.app.helpers({
    restaurants: [
      {
        name: "Hells Kitchen",
        location: "downtown norfolk",
        meals: [
          {
           name: "meal option",
           picture: ["http://placehold.it/200x200"]
          },
          {
          name: "meal option",
          picture: ["http://placehold.it/200x200"]
         }
        ],
        active: true
      },
      {
        name: "No Frill Grill",
        location: "ghent norfolk",
        meals: [
          {
           name: "meal option",
           picture: ["http://placehold.it/200x200"]
          },
          {
          name: "meal option",
          picture: ["http://placehold.it/200x200"]
         }
        ],
        active: true
      },
      { name: "Omar's Carriage House",
        location: "bute norfolk",
        meals: [
          {
           name: "meal option",
           picture: ["http://placehold.it/200x200"]
          },
          {
          name: "meal option",
          picture: ["http://placehold.it/200x200"]
         }
        ],
        active: true
      }
    ],
  });

  Template.app.events({
    'click .btn': function (event){
      console.log("buying", this.name);
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
