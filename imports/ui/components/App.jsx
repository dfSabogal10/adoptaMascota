import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {Publicacion} from "../../api/Publicacion.js"
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import verPost from './verPost.jsx';
import MyPosts from './MyPosts.jsx';
import seeMyPost from './seeMyPost.jsx';
import {
		BrowserRouter as Router,
		Route,
		Link
	} from "react-router-dom";
	import Busqueda from './Busqueda.jsx';



export class App extends Component {
	//
	// renderProjects() {
	// 	return this.props.projects.map( (project) => {
	// 		return <Project project= {project} > </Project>;
	// 	});
	// }
	//
	// renderTop() {
	// return this.props.top.map( (project) => {
	// 	return <Project project= {project} > </Project>;
	// });
	// }
	//
	// renderFavourites(){
	// return this.props.favourites.map( (project) => {
	// 	return <Project project= {project} > </Project>;
	// });
	// }

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
      		<li><Link to="/postMyPet">Post</Link></li>
					<li><AccountsUIWrapper/></li>
				</ul>
  			</div>
			</nav>
				{/* <div className="row">
					<img className="mySlides w3-animate-right" src="http://4kwallpapers.site/wp-content/uploads/2011/03/brown-yawning-dog-1080p-wallpaper.jpg"/>
					<img className="mySlides w3-animate-right" src="http://www.ihdimages.com/wp-content/uploadsktz/2014/09/dog_wallpaper_1080p.jpg"/>
				</div> */}

		      <Route exact path="/" component={Busqueda}/>
		      <Route path="/post" component={verPost}/>
					<Route path="/myposts" component={MyPosts}/>
					<Route path="/seeMyPost" component={seeMyPost}/>


					</div>
		  </Router>
	</section>


			);
	}
}


// App.propTypes = {
// 	projects : PropTypes.array.isRequired
// }


export default AppContainer = createContainer(()=>{
	Meteor.subscribe('publicacion');

	return {
		projects: Publicacion.find({}).fetch(),
	};
}, App);
