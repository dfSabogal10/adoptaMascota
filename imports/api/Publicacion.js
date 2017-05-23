import {Mongo} from "meteor/mongo";


export const Publicacion = new Mongo.Collection("publicacion");
if (Meteor.isServer) {

  // This code only runs on the server

  Meteor.publish('publicacion', function projectsPublication() {

    return Publicacion.find();

  });
}

Meteor.methods({
	'Projects.votarPorProyecto'(pid){
		if (! Meteor.userId()) {
      window.alert('You must login to vote');
			throw new Meteor.Error('not-authorized');
		}
		console.log("voto");
		Projects.update({_id:pid}, { $inc: { votes: 1,}} );
	},
	'Projects.añadirAFavoritos'(pid){
		if (! Meteor.userId()) {
      window.alert('You must login to add to favourites');
			throw new Meteor.Error('not-authorized');
		}
		console.log("añadido");
		Projects.update(
		   { _id: pid },
		   { $push: { FavouriteUsers: Meteor.userId() } }
		);
	},
});
