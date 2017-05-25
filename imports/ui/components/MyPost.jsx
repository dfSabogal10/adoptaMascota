import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import {Link} from 'react-router-dom';
import {BlazeToReact} from "meteor/thereactivestack:blazetoreact";





export default class MyPost extends Component {

constructor(props){
	super(props);
}
eliminarPost(){

}
marcarComoAdoptado(id){

Meteor.call('Mascota.setAdopted',"NOMBRE DE LA MASCOTa");

}

f1(){
	Meteor.call('Projects.votarPorProyecto',this.props.project._id);
}
añadirAFavoritos(){
	Meteor.call('Projects.añadirAFavoritos',this.props.project._id);
}
	render() {
		return (
			<div className="row">

				<div className="col-xs-3">
					<img src="https://img.clipartfest.com/016bc28f9f1eb00c7ba3a337926f4bdc_dog-head-profile-dog-clipart-profile_2400-2294.png"/>
				</div>
				<div className="col-xs-9">
					<div className="row">
						<div className="col-xs-10">
							<Link to="seeMyPost/"><h3>post 1</h3></Link>
						</div>
						<div className="col-xs-2">
							<p className="fechapost">dd|mm/yyyy</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat massa a leo cursus tempus. Donec rutrum vehicula auctor. Donec efficitur nunc ut vestibulum lobortis. Suspendisse fringilla cursus condimentum. </p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>nombre: nombre</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>raza: raza</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>edad: raza</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>ciudad: ciudad</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11 botonesmypost">
						<button id="botonAdoptar"  className="btn btn-primary" onClick={this.marcarComoAdoptado(this.id)}>Mark as adopted</button>
						<button className="btn btn-danger" onClick={this.eliminarPost}>Remove post</button>
						</div>
					</div>
					<uploadFileForm/>
				</div>

			</div>
		);
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
