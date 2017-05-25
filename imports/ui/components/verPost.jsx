import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import Post from "./Post.jsx";



export default class Busqueda extends Component {

constructor(props){
	super(props);
	this.state={post:{}};
}
componentWillMount(){
	var response = Meteor.call("Mascota.findbyid",this.props.match.params.idPost,(err, res) =>{

	if (err) { console.log(err); }
	else {
		this.setState({post:res[0].nuevaMascota});
		console.log("res",res[0]);

	}
	});
}
componentDidMount(){
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
acc[i].onclick = function() {
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.maxHeight){
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}
}
}
	render() {
		if(this.state.post.fecha){
		console.log("arriba es asincronico",console.log(this.state));

		return (
			<div className="row">
				<div className="col-xs-4">
					<img src="https://img.clipartfest.com/016bc28f9f1eb00c7ba3a337926f4bdc_dog-head-profile-dog-clipart-profile_2400-2294.png"/>
				</div>
				<div className="col-xs-8">
					<h2>{this.state.post.nombre}</h2>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Date: {this.state.post.fecha.getDate()+"/"+this.state.post.fecha.getMonth()+"/"+this.state.post.fecha.getFullYear()}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Name: {this.state.post.nombreMascota}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Descripcion: {this.state.post.descripcion} </p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Tipo: {this.state.post.tipoMascota}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Raza: {this.state.post.raza}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Edad: {this.state.post.edadMascota}</p>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>ciudad: {this.state.post.ciudad}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Barrio: {this.state.post.barrio}</p>
						</div>
					</div>
					<br/>
					<h4>Datos de contacto</h4>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Telefono: {this.state.post.telefonoContacto}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Email: {this.state.post.emailContacto}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Otros datos de contacto: {this.state.post.otrosDatosContacto}</p>
						</div>
					</div>
				</div>


			</div>

		);
	}
	else{
		return(<div>Cargando...</div>);
	}

	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
