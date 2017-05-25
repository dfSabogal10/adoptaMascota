import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {Publicacion} from "../../api/Publicacion.js";
import MyPost from "./MyPost.jsx";
import { Template } from 'meteor/templating';



export default class MyPosts extends Component {
	constructor(props){
		super(props);
		this.state={posts:[]};
	}

	componentWillMount () {
	//		var response = Meteor.call("Mascota.viewMyPosts",(err, res) =>{

		//	if (err) { console.log(err); }
			//else {
			//console.log("MISPOST:",res);
			//}
		//	});

			//var otro = Meteor.call("Mascota.findbydate",1,10,(err, res) =>{
			//if (err) { console.log(err); }
			//else {
			//console.log("MISPOST:",res);
			//}
			//});

		//	var response = Meteor.call("Mascota.viewMyPosts",(err, res) =>{
			//if (err) { console.log(err); }
			//else {
				//this.setState({posts:res});
				//console.log(res);
			//}
			//});
			var response = Meteor.call("Mascota.setDesAdopted","8qByTM55iGRnCMETs",(err, res) =>{
			if (err) { console.log(err); }
			else {
				this.setState({posts:res});
				console.log(res);
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
		return (

			<div className="row">
				<div className="col-xs-12">
				<h2> My Posts</h2>
				{this.state&&this.state.posts&&this.state.posts.map(post => {
						return <MyPost post={post} key={post._id}/>})}
				</div>

			</div>
		);
	}
}



// Project.propTypes = {
// 	project: PropTypes.object.isRequired
// }
