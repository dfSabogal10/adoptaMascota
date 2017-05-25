import { Meteor } from "meteor/meteor";
import {Pollas} from "./Pollas.js";
import { assert } from "meteor/practicalmeteor:chai";
import { resetDatabase } from "meteor/xolvio:cleaner";


if (Meteor.isServer) {
describe("mascotas", function () {
  beforeEach(function () {
    resetDatabase();
  });
  it("Create a new Pet for Adoption", function () {
      // This code will be executed by the test driver when the app is started
      // in the correct mode
      const agregar = Meteor.server.method_handlers["Mascota.addNewAdopt"];
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
      var user = Meteor.call("Mascota.addNewAdopt",formData);
    //  agregar.call(jsonString);
      assert.equal(Mascota.find().count(), 1);

    }),
    it("I can set as adopted a pet with all the constraints", function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
    assert.equal(Mascota.find().count(), 1);


  })

})
}
