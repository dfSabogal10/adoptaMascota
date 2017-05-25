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
<<<<<<< HEAD
=======
marcarComoAdoptado(id){

Meteor.call('Mascota.setAdopted',"NOMBRE DE LA MASCOTa");
>>>>>>> d2869de12f9a78a8bc492f6cc8db747755114af8

marcarComoAdoptado(){
	console.log(this.props.post.nuevaMascota.adoptado);
	Meteor.call('Mascota.setAdopted',this.props.post._id);
	console.log(this.props.post.nuevaMascota.adoptado);
}

desmarcarComoAdoptado(){
	Meteor.call('Mascota.setDesAdopted',this.props.post._id);
}

	render() {
		console.log(this.props);
		if(!this.props.post.nuevaMascota.adoptado)
		{

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
						<button id="botonAdoptar"  className="btn btn-primary" onClick={this.marcarComoAdoptado.bind(this)}>Mark as adopted</button>
						<button className="btn btn-danger" onClick={this.eliminarPost}>Remove post</button>
						</div>
					</div>
					<uploadFileForm/>
				</div>

			</div>
		);
	}
	else{
		return (
			<div className="row">

				<div className="col-xs-3">
					<img src="https://img.clipartfest.com/016bc28f9f1eb00c7ba3a337926f4bdc_dog-head-profile-dog-clipart-profile_2400-2294.png"/>
				</div>
				<div className="col-xs-9">
					<div className="row">
						<div className="col-xs-10">
							<Link to={"seeMyPost/"+this.props.post._id}><h3>{this.props.post.nuevaMascota.nombre}</h3></Link>
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
						<button id="botonAdoptar"  className="btn btn-default" onClick={this.desmarcarComoAdoptado.bind(this)}>Mark as adopted</button>
						<button className="btn btn-danger" onClick={this.eliminarPost}>Remove post</button>
						</div>
					</div>
				</div>

			</div>);
	}
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
