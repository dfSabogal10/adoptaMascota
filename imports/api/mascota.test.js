import { Meteor } from "meteor/meteor";
import {Mascota} from "./Mascota.js";
import { assert } from "meteor/practicalmeteor:chai";
import { resetDatabase } from "meteor/xolvio:cleaner";
import { Random } from 'meteor/random';



if (Meteor.isServer) {
  describe('Mascota', () => {
    describe('methods', () => {
      const userId = Random.id();

      beforeEach(() => {
        Mascota.remove({});
      });

      it('Create a new Pet for Adoption', () => {
        // Find the internal implementation of the insert guess method so we can
        // test it in isolation
        const addNewAdopt = Meteor.server.method_handlers['Mascota.addNewAdopt'];
        // console.log(Meteor.server);
        // Set up a fake method invocation that looks like what the method expects

        const invocation = { userId };

        const when = new Date();
        let formData = {
         name: "doggie",
         description: "is the best doggie in the world",
         tipoMascota: "Dog",
         edadMascota: "1",
         nombreMasctoa: "Ricky",
         vacunas: "none",
         telefonoContacto: "123123",
         emailContacto: "something@hotmail.com",
         otrosDatosContacto: "Call my friend",
         barrio: "Calle falsa 123",
         ciudad: "Bogota",
         fecha: "none",
         raza: "doggie"

        }
        // Run the method with `this` set to the fake invocation
        addNewAdopt.apply(invocation, [formData]);

        // Verify that the method does what we expected
        assert.equal(Mascota.find().count(), 1);
      }),
      it('Let me to adopt a Pet', () => {
      const addNewAdopt = Meteor.server.method_handlers['Mascota.addNewAdopt'];
      const invocation = { userId };

        const when = new Date();
        let formData = {
         name: "doggie",
         description: "is the best doggie in the world",
         tipoMascota: "Dog",
         edadMascota: "1",
         nombreMasctoa: "Ricky",
         vacunas: "none",
         telefonoContacto: "123123",
         emailContacto: "something@hotmail.com",
         otrosDatosContacto: "Call my friend",
         barrio: "Calle falsa 123",
         ciudad: "Bogota",
         fecha: "none",
         raza: "doggie"

        }
        // Run the method with `this` set to the fake invocation
        addNewAdopt.apply(invocation, [formData]);
        var papitas = Mascota.find().fetch();
        const adopt = Meteor.server.method_handlers['Mascota.setAdopted'];
        adopt.apply(invocation, [papitas[0]._id]);
        // Verify that the method does what we expected
        assert.equal(Mascota.find({"nuevaMascota.adoptado":true}).count(), 1);
      });


      });
  });






}
