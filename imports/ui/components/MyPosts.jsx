import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import MyPost from "./MyPost.jsx";



export default class MyPosts extends Component {

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
				<div className="col-xs-12">
				<h2> My Posts</h2>
				<MyPost/>
				<MyPost/>
				<MyPost/>
				<MyPost/>
				<MyPost/>
				<MyPost/>
				</div>

			</div>
		);
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
