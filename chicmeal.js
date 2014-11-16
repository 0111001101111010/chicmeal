
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.setDefault("view", "first");
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
      //$("#app").html("<div>"+this.name+"</div");
    }
  });

  Template.payment.events({
    'click button': function(e) {
        e.preventDefault();

        StripeCheckout.open({
            key: 'pk_test_FUqfEymuQqGmJrUbvSuZvv5K',
            amount: 5000,
            name: 'Chic',
            description: 'A whole bag of awesome ($50.00)',
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
