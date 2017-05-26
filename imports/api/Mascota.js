import {Mongo} from "meteor/mongo";


export const Mascota = new Mongo.Collection("mascota");
if (Meteor.isServer) {

  // This code only runs on the server

  Meteor.publish("mascota", function projectsPublication() {

    return Mascota.find();
  });
}


Meteor.methods({
	"Mascota.addNewAdopt"(nuevaMascota){
		if (! Meteor.userId()) {
      window.alert("You must login to add a new pet");
			throw new Meteor.Error("not-authorized");
		}
   nuevaMascota.userId = Meteor.userId();
   nuevaMascota.adoptado = false;
   nuevaMascota.fecha =new Date();

    console.log(nuevaMascota);

  Mascota.insert({ nuevaMascota});
  return "Agregado";
},
"Mascota.viewMyPosts"(){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
var user=Meteor.userId();
var mascota = Mascota.find({"nuevaMascota.userId":user}).fetch();
return mascota;
},
"Mascota.setAdopted"(id){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

  Mascota.update({ "_id":id},{$set: { "nuevaMascota.adoptado":false}});

},
"Mascota.setDesAdopted"(id){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }


Mascota.update({ "_id":id},{$set: { "nuevaMascota.adoptado":false}});
},
"Mascota.deletePost"(id){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

Mascota.remove({ "_id":id});

},
"Mascota.findbyid"(id){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"_id":id}).fetch();
  return mascota;
},


"Mascota.findbydate"(salto,limit){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({}, {sort: { "nuevaMascota.fecha": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.viewallnotAdopted"(salto,limit){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
var user=Meteor.userId();
var mascota = Mascota.find({"nuevaMascota.adoptado":false}, {sort: { "nuevaMascota.fecha": -1 } ,skip:salto,limit:limit}).fetch();
return mascota;
},
"Mascota.findbytype"(salto,limit,type){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"nuevaMascota.tipoMascota":type}, {sort: { "nuevaMascota.tipoMascota": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbyraze"(salto,limit,raza){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"nuevaMascota.raza":raza}, {sort: { "nuevaMascota.raza": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbycity"(salto,limit,ciudad){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"nuevaMascota.ciudad":ciudad}, {sort: { "nuevaMascota.ciudad": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbyage"(salto,limit,edad){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

  var mascota = Mascota.find({ "nuevaMascota.edadMascota":edad}, {sort: { "nuevaMascota.edadMascota": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbpublicationName"(salto,limit,name){
  if (! Meteor.userId()) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

  var mascota = Mascota.find({ "nuevaMascota.nombre":name}, {sort: { "nuevaMascota.nombre": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},





});
