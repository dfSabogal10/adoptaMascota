import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import {Link} from 'react-router-dom';
import {BlazeToReact} from "meteor/thereactivestack:blazetoreact";





export default class MyPost extends Component {

constructor(props){
	super(props);

}



componentWillMount(){
	this.state={adoptado:this.props.post.nuevaMascota.adoptado};
}
marcarComoAdoptado(){
	Meteor.call('Mascota.setAdopted',this.props.post._id, (err, res) =>{
	if (err) { console.log(err); }
	else {
		this.setState({adoptado:true});
	}
	}
	);
}
componentDidMount(){
	if(this.props.post.nuevaMascota.imagen){
		console.log("entra");
		var image = document.getElementById(this.props.post._id);
		image.src = this.props.post.nuevaMascota.imagen;
		image.hidden=false;
	}

}

desmarcarComoAdoptado(){
	Meteor.call('Mascota.setDesAdopted',this.props.post._id, (err, res) =>{
	if (err) { console.log(err); }
	else {
		this.setState({adoptado:false});
	}
	});
}
eliminarPost(){
	var r = confirm("Are you sure you want to delete your post?");
if (r == true) {

	Meteor.call('Mascota.deletePost',this.props.post._id, (err, res) =>{
	if (err) { console.log(err); }
	else {
		console.log("efectivamente lo borra")
	}
	});
}
}


	render() {
		console.log("adoptadostate",this.state.adoptado);
		console.log("adoptadoprops",this.props.post.nuevaMascota.adoptado);
		if(!this.state.adoptado)
		{

		return (
			<div className="row post">

				<div className="col-xs-3">
					<Link to={"seeMyPost/"+this.props.post._id}><img id={this.props.post._id} src="https://img.clipartfest.com/016bc28f9f1eb00c7ba3a337926f4bdc_dog-head-profile-dog-clipart-profile_2400-2294.png"/></Link>
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
						<button id="botonAdoptar"  className="btn btn-primary" onClick={this.marcarComoAdoptado.bind(this)}>Mark as adopted</button>
						<a href="/"><button className="btn btn-danger" onClick={this.eliminarPost.bind(this)}>Remove post</button></a>
						</div>
					</div>
				</div>

			</div>
		);
	}
	else{
		return (
			<div className="row post">

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
						<button id="botonAdoptar"  className="btn btn-default" onClick={this.desmarcarComoAdoptado.bind(this)}>Mark as unadopted</button>
						<a href="/"><button className="btn btn-danger" onClick={this.eliminarPost.bind(this)}>Remove post</button></a>
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
