import { Meteor } from 'meteor/meteor';

import {Publicacion} from "../imports/api/Publicacion.js";
import {Mascota} from "../imports/api/Mascota.js";

Meteor.startup(() => {
  // code to run on server at startup

  ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: 'YOUR_TEST_APP_ID',
    secret: 'YOUR_TEST_APP_SECRET'
});
});
