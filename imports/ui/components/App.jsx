import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Mascota} from "../../api/Mascota.js"
import AccountsUIWrapper from "./AccountsUIWrapper.jsx";
import verPost from "./verPost.jsx";
import MyPosts from "./MyPosts.jsx";
import seeMyPost from "./seeMyPost.jsx";
import Formulario from "./Formulario.jsx";
import FileUploadComponent from "./Prueba.jsx";

import {
		BrowserRouter as Router,
		Route,
		Link
	} from "react-router-dom";
	import Busqueda from "./Busqueda.jsx";



export class App extends Component {
	constructor(props){
		super(props);
		this.state={busqueda:false,
								post:[]}

								
	}
	setBusquedaFalse(){
		this.setState({busqueda: false});
	}
	handleSubmit (e, message) {
		e.preventDefault();
		Meteor.call("Mascota.findbpublicationName",0,10,this.refs.nombrePublicacion.value,(err, res) =>{

  	if (err) { console.log(err); }
  	else {
  		console.log(res);
			this.setState({busqueda:true,
										post:res});

  	}
  	});

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
		// 	console.log(Meteor.call("Mascota.addNewAdopt",testData[i]));
		// }
	}

	render() {
		if(this.state.busqueda){
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
							<form onSubmit={this.handleSubmit.bind(this)}>
								<div className="input-group">
								<input type="text" ref="nombrePublicacion" className	="form-control" placeholder="Search for..."/>
									<span className="input-group-btn">
										<Link to="/"><button className="btn btn-primary" onClick={this.buscarpornombre} type="Submit">Go!</button></Link>
									</span>
								</div>
							</form>
						</div>
	    			<ul className="nav navbar-nav navbar-right">
	      		<li><Link to="/myposts">My posts</Link></li>
	      		<li><Link className="botonPost"to="/form"><button className="btn btn-primary">Post</button></Link></li>
						<li><AccountsUIWrapper/></li>
					</ul>
	  			</div>
				</nav>
					{/* <div className="row">
						<img className="mySlides w3-animate-right" src="http://4kwallpapers.site/wp-content/uploads/2011/03/brown-yawning-dog-1080p-wallpaper.jpg"/>
						<img className="mySlides w3-animate-right" src="http://www.ihdimages.com/wp-content/uploadsktz/2014/09/dog_wallpaper_1080p.jpg"/>
					</div> */}
			      <Route exact path="/" render={() => (<Busqueda setSearchboxFalse={this.setBusquedaFalse.bind(this)} searchbox={true} posts={this.state.post}/>)} />
			      <Route path="/post/:idPost" component={verPost}/>
						<Route path="/myposts" component={MyPosts}/>
						<Route path="/seeMyPost/:idPost" component={seeMyPost}/>
						<Route path="/form" component={Formulario}/>
						</div>
			  </Router>
		</section>


				);
		}
		else{
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
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="input-group">
							<input type="text" ref="nombrePublicacion" className	="form-control" placeholder="Search for..."/>
								<span className="input-group-btn">
									<button className="btn btn-primary" onClick={this.buscarpornombre} type="Submit">Go!</button>
								</span>
							</div>
						</form>
					</div>
    			<ul className="nav navbar-nav navbar-right">
      		<li><Link to="/myposts">My posts</Link></li>
      		<li><Link className="botonPost"to="/form"><button className="btn btn-primary">Post</button></Link></li>
					<li><AccountsUIWrapper/></li>
				</ul>
  			</div>
			</nav>
				{/* <div className="row">
					<img className="mySlides w3-animate-right" src="http://4kwallpapers.site/wp-content/uploads/2011/03/brown-yawning-dog-1080p-wallpaper.jpg"/>
					<img className="mySlides w3-animate-right" src="http://www.ihdimages.com/wp-content/uploadsktz/2014/09/dog_wallpaper_1080p.jpg"/>
				</div> */}
		      <Route exact path="/" render={() => (<Busqueda setSearchboxFalse={this.setBusquedaFalse.bind(this)} searchbox={false} posts={this.props.posts}/>)} />
		      <Route path="/post/:idPost" component={verPost}/>
					<Route path="/myposts" component={MyPosts}/>
					<Route path="/seeMyPost/:idPost" component={seeMyPost}/>
					<Route path="/form" component={Formulario}/>
					<Route path="/prueba" component={FileUploadComponent}/>
					</div>
		  </Router>
	</section>


			);
		}
	}
}


App.propTypes = {
	posts : PropTypes.array.isRequired
}


export default AppContainer = createContainer(()=>{
	Meteor.subscribe("mascota");

	return {
		posts: Mascota.find({}).fetch(),
	};
}, App);
