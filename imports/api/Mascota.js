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
		if (! this.userId) {
      window.alert("You must login to add a new pet");
			throw new Meteor.Error("not-authorized");
		}

   nuevaMascota.userId = this.userId;
   nuevaMascota.adoptado = false;
   nuevaMascota.fecha =new Date();

  Mascota.insert({ nuevaMascota});
  return "Agregado";
},
"Mascota.viewMyPosts"(){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
var user=this.userId;
var mascota = Mascota.find({"nuevaMascota.userId":user}).fetch();
return mascota;
},
"Mascota.setAdopted"(id){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }


  Mascota.update({ "_id":id},{$set: { "nuevaMascota.adoptado":true}});

},
"Mascota.setDesAdopted"(id){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }


Mascota.update({ "_id":id},{$set: { "nuevaMascota.adoptado":false}});
},
"Mascota.deletePost"(id){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

Mascota.remove({ "_id":id});

},
"Mascota.findbyid"(id){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"_id":id}).fetch();
  return mascota;
},


"Mascota.findbydate"(salto,limit){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({}, {sort: { "nuevaMascota.fecha": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.viewallnotAdopted"(salto,limit){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
var user=this.userId;
var mascota = Mascota.find({"nuevaMascota.adoptado":false}, {sort: { "nuevaMascota.fecha": -1 } ,skip:salto,limit:limit}).fetch();
return mascota;
},
"Mascota.findbytype"(salto,limit,type){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"nuevaMascota.tipoMascota":type}, {sort: { "nuevaMascota.tipoMascota": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbyraze"(salto,limit,raza){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"nuevaMascota.raza":raza}, {sort: { "nuevaMascota.raza": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbycity"(salto,limit,ciudad){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }
  var mascota = Mascota.find({"nuevaMascota.ciudad":ciudad}, {sort: { "nuevaMascota.ciudad": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbyage"(salto,limit,edad){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

  var mascota = Mascota.find({ "nuevaMascota.edadMascota":edad}, {sort: { "nuevaMascota.edadMascota": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},
"Mascota.findbpublicationName"(salto,limit,name){
  if (! this.userId) {
    window.alert("You must login to add a new pet");
    throw new Meteor.Error("not-authorized");
  }

  var mascota = Mascota.find({ "nuevaMascota.nombre":name}, {sort: { "nuevaMascota.nombre": -1 } ,skip:salto,limit:limit}).fetch();

  return mascota;
},





});
