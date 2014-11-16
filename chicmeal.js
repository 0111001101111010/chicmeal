
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
    },
    'click #pay': function(e) {
        e.preventDefault();

        StripeCheckout.open({
            key: 'YOUR PUBLIC KEY',
            amount: 5000,
            name: 'Food',
            description: 'Paying',
            panelLabel: 'Pay Now',
            token: function(res) {
                // Do something with res.id
                // Store it in Mongo and/or create a charge on the server-side
                console.info(res);
            }
        });
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
