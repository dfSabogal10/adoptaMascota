import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import Post from "./Post.jsx";



export default class Busqueda extends Component {

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
				<div className="col-xs-3">
					<h2>Filters</h2>
					<button className="accordion">Pet type</button>
						<div className="panel">
							<a href="#">dog</a><br/>
							<a href="#">cat</a>
						</div>
						<button className="accordion">Breed</button>
							<div className="panel">
								<h4>dog</h4>
								<a href="#">retrievers</a><br/>
								<a href="#">German Sheperd</a><br/>
								<a href="#">Golden</a><br/>
								<a href="#">Bulldog</a><br/>
								<a href="#">Pitbull</a><br/>
								<a href="#">Rottweiler</a><br/>
								<a href="#">Boxer</a><br/>
								<a href="#">chihuahua</a><br/>
								<h4>cat</h4>
								<a href="#">Persian</a><br/>
								<a href="#">Maine Coon</a><br/>
								<a href="#">Exotic</a><br/>
								<a href="#">Siamese</a><br/>
								<a href="#">Abyssinian</a><br/>
								<a href="#">Ragdoll</a><br/>
								<a href="#">Birman</a><br/>
							</div>
						<button className="accordion">Age</button>
							<div className="panel">
								<a href="#">from 0 to 6 months</a><br/>
								<a href="#">from 6 months to 1 year</a><br/>
								<a href="#">from 1 to 2 years</a><br/>
								<a href="#">from 2 to 3 years</a><br/>
								<a href="#">from 3 to 5 years</a><br/>
								<a href="#">more than 5 years</a>
							</div>
							<button className="accordion">Country</button>
								<div className="panel">
									<a href="#">Colombia</a><br/>
									<a href="#">USA</a><br/>
									<a href="#">France</a><br/>
									<a href="#">Spain</a><br/>
									<a href="#">Canada</a><br/>
									<a href="#">Italy</a><br/>
								</div>
							<div className="botonFiltros">
							<button className="btn btn-primary btn-lg">Search</button>
							</div>

				</div>
				<div className="col-xs-9">
				<h2>Posts</h2>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				</div>

			</div>
		);
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
