import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Mascota} from "../../api/Mascota.js"
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import verPost from './verPost.jsx';
import MyPosts from './MyPosts.jsx';
import seeMyPost from './seeMyPost.jsx';
import Formulario from './Formulario.jsx';

import {
		BrowserRouter as Router,
		Route,
		Link
	} from "react-router-dom";
	import Busqueda from './Busqueda.jsx';



export class App extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		// var slideIndex = 0;
		// carousel();
		// function carousel() {
    // var i;
    // var x = document.getElementsByClassName("mySlides");
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none";
    // }
    // slideIndex++;
    // if (slideIndex > x.length) {slideIndex = 1}
    // x[slideIndex-1].style.display = "block";
    // setTimeout(carousel, 2000); // Change image every 2 seconds
		// var testData=[];
		// for (var i = 0; i < 10; i++) {
		// 	testData[i]={
		// 		nombre: "Doy mascota en adopcion "+i,
		// 		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat massa a leo cursus tempus. Donec rutrum vehicula auctor. Donec efficitur nunc ut vestibulum lobortis. Suspendisse fringilla cursus condimentum.",
		// 		tipoMascota: "Perro",
		// 		edadMascota: i,
		// 		nombreMascota: "Mascota "+i,
		// 		raza: "raza "+i,
		// 		vacunas: "ninguna",
		// 		telefonoContacto: 573101234567+i,
		// 		emailContacto: "email"+i+"@email.com",
		// 		otrosDatosContacto: "facebook: usuario"+i,
		// 		nombreUsuario: "usuario"+i,
		// 		pais: "pais "+i,
		// 		ciudad: "ciudad "+i,
		// 		barrio:"barrio " +i,
		// 		imagenes: ["imagen1.com","imagen2.com"],
		// 	}
		//
		// 	console.log(Meteor.call('Mascota.addNewAdopt',testData[i]));
		// }
	}
	render() {

		return(
		<section>
			<Router>
				<div>
			<nav className="navbar navbar-inverse">
  			<div className="container-fluid">
    			<div className="navbar-header">
			      <a className="navbar-brand" href="/">Pet family finder</a>
    			</div>
					<div className="col-xs-4">
							<div className="input-group">
							<input type="text" className	="form-control" placeholder="Search for..."/>
								<span className="input-group-btn">
									<button className="btn btn-default" type="button">Go!</button>
								</span>
							</div>
					</div>
    			<ul className="nav navbar-nav navbar-right">
      		<li><Link to="/myposts">My posts</Link></li>
      		<li><Link to="/form">Post</Link></li>
					<li><AccountsUIWrapper/></li>
				</ul>
  			</div>
			</nav>
				{/* <div className="row">
					<img className="mySlides w3-animate-right" src="http://4kwallpapers.site/wp-content/uploads/2011/03/brown-yawning-dog-1080p-wallpaper.jpg"/>
					<img className="mySlides w3-animate-right" src="http://www.ihdimages.com/wp-content/uploadsktz/2014/09/dog_wallpaper_1080p.jpg"/>
				</div> */}

		      <Route exact path="/" render={() => (<Busqueda posts={this.props.posts}/>)} />
		      <Route path="/post/:idPost" component={verPost}/>
					<Route path="/myposts" component={MyPosts}/>
					<Route path="/seeMyPost/:idPost" component={seeMyPost}/>
					<Route path="/form" component={Formulario}/>



					</div>
		  </Router>
	</section>


			);
	}
}


App.propTypes = {
	posts : PropTypes.array.isRequired
}


export default AppContainer = createContainer(()=>{
	Meteor.subscribe('mascota');

	return {
		posts: Mascota.find({}).fetch(),
	};
}, App);
