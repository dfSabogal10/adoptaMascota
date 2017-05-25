import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
var reader = new FileReader();


export default class Prueba extends Component {

  constructor(props) {
    super(props);
  }



  componentWillMount () {

			var response = Meteor.call("Mascota.viewMyPosts",(err, res) =>{
			if (err) { console.log(err); }
			else {
				this.setState({posts:res});
				console.log(res);
        var image = document.querySelector('img');
        image.src = res[0].nuevaMascota.imagen;
        image.hidden=false;
			}
			});




	}




  render() {
    return (

      <div className="form-group">

        <div className="col-xs-10 forminput">
          <img src="" width="400" height="400" style={{ margin: 40 }} alt="Pet Preview"  hidden/>
        </div>

          </div>

    );
  }
}
