import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formulario-d',
  templateUrl: './formulario-d.component.html',
  styleUrls: ['./formulario-d.component.css']
})
export class FormularioDComponent implements OnInit {

  formValue!:FormGroup;

  public data_detalle : Array<any>=[];

  constructor(private FormBuilder:FormBuilder){}
  

  ngOnInit(): void {
    this.obtenerCamposFormulario();
  }

   obtenerCamposFormulario(){
     this.formValue=this.FormBuilder.group({
       nombres:[''],
       apellidos:[''],
       edad:[''],
       ciudad:[''],
       cantidad:[]
     })
   } 


    guardar_detalle(detalleFormulario: any){

      if(detalleFormulario.value.nombres==""){
        alert('El campo nombre no puede estar vacio')
      }else if(detalleFormulario.value.apellidos==""){
        alert('El campo apellidos no puede estar vacio')
      }else if(detalleFormulario.value.edad==""){
        alert('El campo edad no puede estar vacio')
      }else if(detalleFormulario.value.ciudad==""){
        alert('El campo ciudad no puede estar vacio')
      }else if(detalleFormulario.value.cantidad==""){
        alert('El campo cantidad no puede estar vacio')
      }
      else{
      this.data_detalle.push({
        nombres:detalleFormulario.value.nombres,
        apellidos:detalleFormulario.value.apellidos,
        edad:detalleFormulario.value.edad,
        ciudad:detalleFormulario.value.ciudad,
        cantidad:detalleFormulario.value.cantidad        
      })
      alert('donacion exitosa Muchas Gracias');
    }
    }

}



