import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import Post from "./Post.jsx";



export default class Busqueda extends Component {

	constructor(props){
		super(props);
		this.state={busqueda:false,
								posts:[]}
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
	buscarPorTipo(tipo){
		console.log("busqueda por tipo:",tipo);
		this.props.setSearchboxFalse();
		Meteor.call("Mascota.findbytype",0,10,tipo,(err, res) =>{

		if (err) { console.log(err); }
		else {
			console.log(res);
			this.setState({busqueda:true,
										posts:res});

		}
		});
	}
	buscarPorRaza(raza){
		console.log("busqueda por raza:",raza);
		this.props.setSearchboxFalse();
		Meteor.call("Mascota.findbyraze",0,10,raza,(err, res) =>{

		if (err) { console.log(err); }
		else {
			this.setState({busqueda:true,
										posts:res});

		}
		});
	}
	buscarPorEdad(edad){
		console.log("busqueda por edad:",edad);
		this.props.setSearchboxFalse();
		Meteor.call("Mascota.findbyage",0,10,edad,(err, res) =>{

		if (err) { console.log(err); }
		else {
			console.log(res);
			this.setState({busqueda:true,
										posts:res});

		}
		});
	}
	buscarPorCiudad(ciudad){
		console.log("busqueda por ciudad:",ciudad);
		this.props.setSearchboxFalse();
		Meteor.call("Mascota.findbycity",0,10,ciudad,(err, res) =>{

		if (err) { console.log(err); }
		else {
			console.log(res);
			this.setState({busqueda:true,
										posts:res});

		}
		});
	}
	render() {
		if(this.state.busqueda && !this.props.searchbox){
			return (
				<div className="row">
					<div className="col-xs-3">
						<h2>Filters</h2>
						<button className="accordion">Pet type</button>
							<div className="panel">
								<a href="#" onClick={() => this.buscarPorTipo("Perro")}>dog</a><br/>
								<a href="#" onClick={() => this.buscarPorTipo("cat")}>cat</a>
							</div>
							<button className="accordion">Breed</button>
								<div className="panel">
									<h4>dog</h4>
									<a href="#" onClick={() => this.buscarPorRaza("retriever")}>retrievers</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("German Sheperd")}>German Sheperd</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Golden")}>Golden</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Bulldog")}>Bulldog</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Pitbull")}>Pitbull</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Rottweiler")}>Rottweiler</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Boxer")}>Boxer</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("chihuahua")}>chihuahua</a><br/>
									<h4>cat</h4>
									<a href="#" onClick={() => this.buscarPorRaza("Persian")}>Persian</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Maine Coon")}>Maine Coon</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Exotic")}>Exotic</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Siamese")}>Siamese</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Abyssinian")}>Abyssinian</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Ragdoll")}>Ragdoll</a><br/>
									<a href="#" onClick={() => this.buscarPorRaza("Birman")}>Birman</a><br/>
								</div>
							<button className="accordion">Age</button>
								<div className="panel">
									<a href="#" onClick={() => this.buscarPorEdad("0")}>0 years(from 0 to 11 months)</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad("1")}>1 year</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad("2")}>2 years</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad("3")}>3 years</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad("4")}>4 years</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad("5")}>5 years</a>
								</div>
								<button className="accordion">City</button>
									<div className="panel">
										<h4>Colombia</h4>
										<a href="#" onClick={() => this.buscarPorCiudad("Bogota D.C")}>Bogota D.C</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Medellin")}>Medellin</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Cali")}>Cali</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Barranquilla")}>Barranquilla</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Cartagena")}>Cartagena</a><br/>
									</div>
								{/* <div className="botonFiltros">
								<button className="btn btn-primary btn-lg">Search</button>
								</div> */}

					</div>
					<div className="col-xs-9">
					<h2>Posts</h2>
					{this.state&&this.state.posts&&this.state.posts.map(post => {
							return <Post post={post} key={post._id}/>})}
					</div>

				</div>
			);
		}
		else {
		return (
			<div className="row">
				<div className="col-xs-3">
					<h2>Filters</h2>
					<button className="accordion">Pet type</button>
						<div className="panel">
							<a href="#" onClick={() => this.buscarPorTipo("Perro")} >dog</a><br/>
							<a href="#" onClick={() => this.buscarPorTipo("cat")}>cat</a>
						</div>
						<button className="accordion">Breed</button>
							<div className="panel">
								<h4>dog</h4>
								<a href="#" onClick={() => this.buscarPorRaza("retriever")}>retrievers</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("German Sheperd")}>German Sheperd</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Golden")}>Golden</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Bulldog")}>Bulldog</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Pitbull")}>Pitbull</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Rottweiler")}>Rottweiler</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Boxer")}>Boxer</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("chihuahua")}>chihuahua</a><br/>
								<h4>cat</h4>
								<a href="#" onClick={() => this.buscarPorRaza("Persian")}>Persian</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Maine Coon")}>Maine Coon</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Exotic")}>Exotic</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Siamese")}>Siamese</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Abyssinian")}>Abyssinian</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Ragdoll")}>Ragdoll</a><br/>
								<a href="#" onClick={() => this.buscarPorRaza("Birman")}>Birman</a><br/>
							</div>
							<button className="accordion">Age</button>
								<div className="panel">
									<a href="#" onClick={() => this.buscarPorEdad(0)}>0 years(from 0 to 11 months)</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad(1)}>1 year</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad(2)}>2 years</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad(3)}>3 years</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad(4)}>4 years</a><br/>
									<a href="#" onClick={() => this.buscarPorEdad(5)}>5 years</a>
								</div>
								<button className="accordion">City</button>
									<div className="panel">
										<h4>Colombia</h4>
										<a href="#" onClick={() => this.buscarPorCiudad("Bogota D.C")}>Bogota D.C</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Medellin")}>Medellin</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Cali")}>Cali</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Barranquilla")}>Barranquilla</a><br/>
										<a href="#" onClick={() => this.buscarPorCiudad("Cartagena")}>Cartagena</a><br/>
									</div>
							{/* <div className="botonFiltros">
							<button className="btn btn-primary btn-lg">Search</button>
							</div> */}

				</div>
				<div className="col-xs-9">
				<h2>Posts</h2>
				{this.props&&this.props.posts&&this.props.posts.map(post => {
						return <Post post={post} key={post._id}/>})}
				</div>

			</div>
		);
	}
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
