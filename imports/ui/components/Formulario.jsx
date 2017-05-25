import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
const reactFormContainer = document.querySelector(".react-form-container");


class ReactFormLabel extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
  )
 }
}


export default class Formulario extends Component {

	constructor(props) {
  super(props);

  this.state = {
   nombre: "",
   despricion: "",
   tipoMascota: "",
   edadMascota: "",
	 nombreMascota: "",
	 vacunas: "",
	 telefonoContacto: "",
	 emailContacto: "",
	 otrosDatosContacto: "",
	 ciudad: "",
	 barrio: "",
	 raza: "",

	 fecha: ""

  }
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

 }

 handleChange  (event) {

	 this.setState({

			nombre: event.target.nombre,
	    despricion: event.target.despricion,
	    tipoMascota: event.target.tipoMascota,
	    edadMascota: event.target.edadMascota,
	 	 nombreMascota: event.target.nombreMascota,
	 	 vacunas: event.target.vacunas,
	 	 telefonoContacto: event.target.telefonoContacto,
	 	 emailContacto: event.target.emailContacto,
	 	 otrosDatosContacto: event.target.otrosDatosContacto,
	 	 barrio: event.target.barrio,
		 ciudad: event.target.ciudad,
	 	 fecha: event.target.fecha,
		 raza: event.target.raza

		},);
 }

 handleSubmit (e, message) {
  e.preventDefault();
	console.log(this.state);

  let formData = {
   name: this.refs.name.value,
   description: this.refs.description.value,
   tipoMascota: this.refs.tipoMascota.value,
   edadMascota: this.refs.edadMascota.value,
	 nombreMasctoa: this.refs.nombreMasctoa.value,
	 vacunas: this.refs.vacunas.value,
	 telefonoContacto: this.refs.telefono.value,
	 emailContacto: this.refs.email.value,
	 otrosDatosContacto: this.refs.datoscontacto.value,
	 barrio: this.refs.barrio.value,
	 ciudad: this.refs.barrio.value,
	 fecha: this.refs.fecha.value,
	 raza: this.refs.raza.value

  }
	console.log(formData);

	if (formData.name.length < 1 || formData.emailContacto.length < 1 || formData.tipoMascota.length < 1 ) {
   return false;
  }
	var user = Meteor.call("Mascota.addNewAdopt",formData);
	 	   console.log("siretorno:",user);

  console.log("Enviado")

  this.setState({
		nombre: "",
		despricion: "",
		tipoMascota: "",
		edadMascota: "",
		nombreMascota: "",
		vacunas: "",
		telefonoContacto: "",
		emailContacto: "",
		otrosDatosContacto: "",
		ciudad: "",
		barrio: "",
		imagenes: "",
		raza: "",

		fecha: ""
	  });
 };






      render(){



        return (

 <form className="react-form" onSubmit={this.handleSubmit}>
	 <h1>Ingresa los datos del amiguito</h1>

    <fieldset className="form-group">
     <ReactFormLabel htmlFor="formName" title="Name:" />
     <input id="formName" className="form-input" ref="name" name="name" type="text" required onChange={this.handleChange} value={this.state.nombre} />
    </fieldset>

		 <fieldset className="form-group">
			<ReactFormLabel htmlFor="formDescription" title="Descricion:" />
			<input id="formDescription" className="form-input" ref="description" name="description" type="text"  onChange={this.handleChange} value={this.state.despricion} />
		 </fieldset>

		 <fieldset className="form-group">
			<ReactFormLabel htmlFor="formTipoMascota" title="Tipo:" />
			<input id="formTipoMascota" className="form-input" ref="tipoMascota"  name="tipoMascota" type="text"  onChange={this.handleChange} value={this.state.tipoMascota} />
		 </fieldset>

		 <fieldset className="form-group">
		 <ReactFormLabel htmlFor="formEdadMascota" title="Edad: (Años)" />
		 <input id="formEdadMascota" className="form-input" ref="edadMascota" name="edadMascota" type="number" required onChange={this.handleChange} value={this.state.edadMascota} />
		</fieldset>

		<fieldset className="form-group">
		<ReactFormLabel htmlFor="formNombreMascota" title="Nombre de la mascota:" />
		<input id="formNombreMascota" className="form-input" ref="nombreMasctoa" name="nombreMasctoa" type="text"  onChange={this.handleChange} value={this.state.nombreMascota} />
	 </fieldset>

	 <fieldset className="form-group">
	 <ReactFormLabel htmlFor="raza" title="Vacunas:" />
	 <input id="raza" className="form-input" ref="raza" name="raza" type="text"  onChange={this.handleChange} value={this.state.raza} />
	 </fieldset>

	 <fieldset className="form-group">
	 <ReactFormLabel htmlFor="formVacunas" title="Vacunas:" />
	 <input id="formVacunas" className="form-input" ref="vacunas" name="vacunas" type="text"  onChange={this.handleChange} value={this.state.vacunas} />
	</fieldset>

	<fieldset className="form-group">
	<ReactFormLabel htmlFor="formTelefonoContacto" title="Telefono de Contacto:" />
	<input id="formTelefonoContacto" className="form-input"  ref="telefono"  name="telefono" type="number" required onChange={this.handleChange} value={this.state.telefonoContacto} />
 </fieldset>

 <fieldset className="form-group">
	<ReactFormLabel htmlFor="formEmailContacto" title="Email:" />
	<input id="formEmailContacto" className="form-input"  ref="email"  name="email" type="email" required onChange={this.handleChange} value={this.state.emailContacto} />
 </fieldset>

 <fieldset className="form-group">
 <ReactFormLabel htmlFor="formOtrosDatosContacto" title="Otros datos de Contacto:" />
 <input id="formOtrosDatosContacto" className="form-textarea" ref="datoscontacto" name="datoscontacto" type="text"  onChange={this.handleChange} value={this.state.otrosDatosContacto} />
 </fieldset>



  <fieldset className="form-group">
  <ReactFormLabel htmlFor="formBarrio" title="Barrio:" />
  <input id="formBarrio" className="form-input" ref="barrio" name="barrio" type="text"  onChange={this.handleChange} value={this.state.barrio} />
  </fieldset>

	<fieldset className="form-group">
  <ReactFormLabel htmlFor="formCiudad" title="Ciudad:" />
  <input id="formCiudad" className="form-input"  ref="ciudad" name="ciudad" type="text"  onChange={this.handleChange} value={this.state.ciudad} />
  </fieldset>

	<fieldset className="form-group">
  <ReactFormLabel htmlFor="formBarrio" title="Fecha" />
  <input id="formBarrio" className="form-input" ref="fecha" name="fecha" type="date" required onChange={this.handleChange} value={this.state.barrio} />
  </fieldset>








    <div className="form-group">
     <input id="formButton" className="btn" type="submit" placeholder="Send message" />
    </div>
   </form>



            );
          }

}
