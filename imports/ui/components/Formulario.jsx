import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
const reactFormContainer = document.querySelector(".react-form-container");

var jesus = new FileReader();
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
imagen : "",
	 fecha: ""

  }
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

 }

 showImage() {
   var image = document.querySelector('img');
   var file = document.querySelector('input[type=file]').files[0];
   jesus.onloadend = function () {
     image.src = jesus.result;
     image.hidden=false;
   }
   if (file) {
    jesus.readAsDataURL(file);
   } else {
     image.src = "";
   }
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
	 raza: this.refs.raza.value,
   imagen:jesus.result
  }
	console.log(formData);

	if (formData.name.length < 1 || formData.emailContacto.length < 1 || formData.tipoMascota.length < 1 ) {
   return false;
  }
	var user = Meteor.call("Mascota.addNewAdopt",formData);
	 	   console.log("siretorno:",user);

  console.log("Enviado")
  jesus = new FileReader();
  var image = document.querySelector('img');
  image.src = "";
  image.hidden=true;

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
    imagen : "",
		fecha: ""
	  });
 };






      render(){



        return (

 <form className="react-form" onSubmit={this.handleSubmit}>
	 <h2>Give us info about your little friend</h2>
    <br/>
    <br/>
    <fieldset className="form-group">
      <div className="row">
        <div className="col-xs-2 formlabel">
          <ReactFormLabel htmlFor="formName" title="Name:" />
         </div>
         <div className="col-xs-10 forminput">
          <input id="formName" className="form-control" ref="name" name="name" type="text" required onChange={this.handleChange} value={this.state.nombre} />
         </div>
     </div>
    </fieldset>

		 <fieldset className="form-group">
       <div className="row">
         <div className="col-xs-2 formlabel">
			        <ReactFormLabel htmlFor="formDescription" title="Descricion:" />
        </div>
        <div className="col-xs-10 forminput">
			       <input id="formDescription" className="form-control" ref="description" name="description" type="text"  onChange={this.handleChange} value={this.state.despricion} />
        </div>
      </div>
		 </fieldset>

		 <fieldset className="form-group">
       <div className="row">
         <div className="col-xs-2 formlabel">
			        <ReactFormLabel htmlFor="formTipoMascota" title="Tipo:" />
        </div>
        <div className="col-xs-10 forminput">
			       <input id="formTipoMascota" className="form-control" ref="tipoMascota"  name="tipoMascota" type="text"  onChange={this.handleChange} value={this.state.tipoMascota} />
        </div>
      </div>
		 </fieldset>

		 <fieldset className="form-group">
       <div className="row">
         <div className="col-xs-2 formlabel">
		         <ReactFormLabel htmlFor="formEdadMascota" title="Edad:" />
           </div>
           <div className="col-xs-10 forminput">
		         <input id="formEdadMascota" className="form-control" ref="edadMascota" name="edadMascota" type="number" required onChange={this.handleChange} value={this.state.edadMascota} />
           </div>
      </div>

		</fieldset>

		<fieldset className="form-group">
      <div className="row">
        <div className="col-xs-2 formlabel">
		        <ReactFormLabel htmlFor="formNombreMascota" title="Nombre de la mascota:"/>
        </div>
      <div className="col-xs-10 forminput">
		      <input id="formNombreMascota" className="form-control" ref="nombreMasctoa" name="nombreMasctoa" type="text"  onChange={this.handleChange} value={this.state.nombreMascota} />
        </div>
      </div>
	 </fieldset>

	 <fieldset className="form-group">
     <div className="row">
       <div className="col-xs-2 formlabel">
	        <ReactFormLabel htmlFor="raza" title="Raza:" />
       </div>
       <div className="col-xs-10 forminput">
         <input id="raza" className="form-control" ref="raza" name="raza" type="text"  onChange={this.handleChange} value={this.state.raza} />
       </div>
     </div>
	 </fieldset>

	 <fieldset className="form-group">
     <div className="row">
       <div className="col-xs-2 formlabel">
	        <ReactFormLabel htmlFor="formVacunas" title="Vacunas:"/>
       </div>
       <div className="col-xs-10 forminput">
	        <input id="formVacunas" className="form-control" ref="vacunas" name="vacunas" type="text"  onChange={this.handleChange} value={this.state.vacunas} />
       </div>
     </div>
	</fieldset>

	<fieldset className="form-group">
    <div className="row">
      <div className="col-xs-2 formlabel">
	       <ReactFormLabel htmlFor="formTelefonoContacto" title="Telefono de contacto:"/>
      </div>
      <div className="col-xs-10 forminput">
	       <input id="formTelefonoContacto" className="form-control"  ref="telefono"  name="telefono" type="number" required onChange={this.handleChange} value={this.state.telefonoContacto} />
      </div>
    </div>
 </fieldset>

 <fieldset className="form-group">
   <div className="row">
     <div className="col-xs-2 formlabel">
	      <ReactFormLabel htmlFor="formEmailContacto" title="Email:" />
     </div>
     <div className="col-xs-10 forminput">
	      <input id="formEmailContacto" className="form-control"  ref="email"  name="email" type="email" required onChange={this.handleChange} value={this.state.emailContacto} />
     </div>
   </div>
 </fieldset>

 <fieldset className="form-group">
   <div className="row">
     <div className="col-xs-2 formlabel">
       <ReactFormLabel htmlFor="formOtrosDatosContacto" title="Otros datos de Contacto:" />
     </div>
     <div className="col-xs-10 forminput">
       <input id="formOtrosDatosContacto" className="form-control" ref="datoscontacto" name="datoscontacto" type="text"  onChange={this.handleChange} value={this.state.otrosDatosContacto} />
     </div>
   </div>
 </fieldset>



  <fieldset className="form-group">
    <div className="row">
      <div className="col-xs-2 formlabel">
        <ReactFormLabel htmlFor="formBarrio" title="Barrio:" />
      </div>
      <div className="col-xs-10 forminput">
        <input id="formBarrio" className="form-control" ref="barrio" name="barrio" type="text"  onChange={this.handleChange} value={this.state.barrio} />
      </div>
    </div>
  </fieldset>

	<fieldset className="form-group">
    <div className="row">
      <div className="col-xs-2 formlabel">
        <ReactFormLabel htmlFor="formCiudad" title="Ciudad:" />
      </div>
      <div className="col-xs-10 forminput">
        <input id="formCiudad" className="form-control"  ref="ciudad" name="ciudad" type="text"  onChange={this.handleChange} value={this.state.ciudad} />
      </div>
    </div>
  </fieldset>

	<fieldset className="form-group">
    <div className="row">
      <div className="col-xs-2 formlabel">
        <ReactFormLabel htmlFor="formBarrio" title="Fecha" />
      </div>
      <div className="col-xs-10 forminput">
        <input id="formBarrio" className="form-control" ref="fecha" name="fecha" type="date" required onChange={this.handleChange} value={this.state.barrio} />
      </div>
    </div>
  </fieldset>

  <fieldset className="form-group">
    <div className="row">
      <div className="col-xs-2 formlabel">
        <ReactFormLabel htmlFor="formImages" title="imagen" />
      </div>
      <div className="col-xs-10 forminput">
        <label className="btn btn-default btn-file" style={{ marginLeft: 10 }}>
        Upload Photo <input type="file" ref="image" name="image" onChange={this.showImage.bind(this)} required />
        </label>
      </div>
    </div>
  </fieldset>

  <fieldset className="form-group">
    <div className="row">
      <div className="col-xs-2 formlabel">
        <ReactFormLabel htmlFor="formImages" title="Preview" />
      </div>
      <div className="col-xs-10 forminput">
        <img src="" width="400" height="400" style={{ margin: 40 }} alt="Pet Preview"  hidden/>
      </div>
    </div>
  </fieldset>





    <div className="form-group right">
     <input id="formButton" className="btn btn-primary" type="submit" placeholder="Send message" />
    </div>
   </form>



            );
          }

}
