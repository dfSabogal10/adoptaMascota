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
var mascota = Mascota.find({ userId:Meteor.userId()}).fetch();
return mascota;
},
'Mascota.setAdopted'(name){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }

Mascota.update({ formName:name},{$set: { adoptado:false}});

},

});
