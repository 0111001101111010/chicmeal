var Restaurants = new Mongo.Collection('restaurants');


Router.route('/', function () {
  this.render('app');
});


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.setDefault("view", "first");
  Template.app.helpers({
    "Restaurants": Restaurants.find()
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
  });
  // code to run on server at startup

}
