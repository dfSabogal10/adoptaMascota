import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import Post from "./Post.jsx";



export default class seeMyPost extends Component {

initUpload(event){
    const file =  event.target.files[0];

    console.log(event.target.files[0]);
    if(file == null){
      return alert('No file selected.');
    }
	}
f1(){
	Meteor.call('Projects.votarPorProyecto',this.props.project._id);
}
añadirAFavoritos(){
	Meteor.call('Projects.añadirAFavoritos',this.props.project._id);
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

		return (

			<div className="row">
				<div className="col-xs-4">
					<img src="https://img.clipartfest.com/016bc28f9f1eb00c7ba3a337926f4bdc_dog-head-profile-dog-clipart-profile_2400-2294.png"/>
					<input className="btn btn-default btn-file form-control" type="file" id="file-input"  onChange={this.initUpload.bind(this)}/>

				</div>
				<div className="col-xs-8">
					<h2>Post</h2>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Fecha: dd/mm/aaaa</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Nombre: nombre</p>
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
						<p>Tipo: perro/gato</p>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Raza: raza</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Edad: edad</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Pais: pais</p>
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
						<div className="col-xs-11">
						<p>Barrio: barrio</p>
						</div>
					</div>
					<br/>
					<h4>Datos de contacto</h4>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Telefono: +123456789098</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Email: email@email.com</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-1"></div>
						<div className="col-xs-11">
						<p>Otros datos de contacto: otrocontacto</p>
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
