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
marcarComoAdoptado(){

Meteor.call('Mascota.setAdopted',"NOMBRE DE LA MASCOTa");

}

f1(){
	Meteor.call('Projects.votarPorProyecto',this.props.project._id);
}
añadirAFavoritos(){
	Meteor.call('Projects.añadirAFavoritos',this.props.project._id);
}
	render() {
		console.log(this.props);

		return (
			<div className="row">

				<div className="col-xs-3">
					<img src="https://img.clipartfest.com/016bc28f9f1eb00c7ba3a337926f4bdc_dog-head-profile-dog-clipart-profile_2400-2294.png"/>
				</div>
				<div className="col-xs-9">
					<div className="row">
						<div className="col-xs-10">
							<Link to="seeMyPost/"><h3>{this.props.post.nuevaMascota.nombre}</h3></Link>
						</div>
						<div className="col-xs-2">
							<p className="fechapost">{this.props.post.nuevaMascota.fecha.getDate()+"/"+this.props.post.nuevaMascota.fecha.getMonth()+"/"+this.props.post.nuevaMascota.fecha.getFullYear()}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Description:{this.props.post.nuevaMascota.descripcion} </p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>name: {this.props.post.nuevaMascota.nombreMascota}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>breed: {this.props.post.nuevaMascota.raza}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>age: {this.props.post.nuevaMascota.edadMascota}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>city: {this.props.post.nuevaMascota.ciudad}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11 botonesmypost">
						<button id="botonAdoptar"  className="btn btn-primary" onClick={this.marcarComoAdoptado()}>Mark as adopted</button>
						<button className="btn btn-danger" onClick={this.eliminarPost}>Remove post</button>
						</div>
					</div>
				</div>

			</div>
		);
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
