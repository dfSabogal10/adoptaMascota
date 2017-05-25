import {Mongo} from "meteor/mongo";


export const Mascota = new Mongo.Collection("mascota");
if (Meteor.isServer) {

  // This code only runs on the server

  Meteor.publish('mascota', function projectsPublication() {

    return Mascota.find();

  });
}


Meteor.methods({
	'Mascota.addNewAdopt'(nuevaMascota){
		if (! Meteor.userId()) {
      window.alert('You must login to vote');
			throw new Meteor.Error('not-authorized');
		}
   nuevaMascota.userId = Meteor.userId();
   nuevaMascota.adoptado = true;

    console.log(nuevaMascota);

  Mascota.insert({ nuevaMascota});
  return "Agregado";
},
'Mascota.viewMyPosts'(){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }
var user=Meteor.userId();

var mascota = Mascota.find({"nuevaMascota.userId":user}).fetch();

console.log(mascota);

return mascota;
},
'Mascota.setAdopted'(id){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }

Mascota.update({ "_id":id},{$set: { "adoptado":false}});

},

});
