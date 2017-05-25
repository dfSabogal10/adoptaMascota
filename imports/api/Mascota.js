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
   nuevaMascota.adoptado = false;
   nuevaMascota.fecha =new Date();

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
return mascota;
},
'Mascota.setAdopted'(id){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }

Mascota.update({ "_id":id},{$set: { "adoptado":true}});
console.log("lohizo")

},
'Mascota.setDesAdopted'(id){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }

Mascota.update({ "_id":id},{$set: { "adoptado":false}});

},
'Mascota.deletePost'(id){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }

Mascota.delete({ "_id":id});

},
'Mascota.findbyid'(id){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }
  var mascota = Mascota.find({"_id":id}).fetch();
  return mascota;
},


'Mascota.findbydate'(page,limit){
  if (! Meteor.userId()) {
    window.alert('You must login to vote');
    throw new Meteor.Error('not-authorized');
  }
  page =page*10
  var mascota = Mascota.find({}, {sort: {fecha: -1}}, {skip:page} ,{limit:10} ).fetch();
  return mascota;
},


});
