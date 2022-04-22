import { Component } from '@angular/core';

interface Persona {
  nombre   : string;
  aPaterno : string;
  aMaterno : string;
  rut      : string;
  edad     : number;
  sexo     : string;
  peso     : number;
  talla    : number;


}
@Component({
  selector: 'app-indice-masa-corporal',
  templateUrl: './indice-masa-corporal.component.html',
  styleUrls: ['./indice-masa-corporal.component.css']
})
export class IndiceMasaCorporalComponent  {


  pacientes: Persona[] =[
    {
      nombre:'Goku',
      aPaterno: 'patata',
      aMaterno: 'mami',
      rut: '12.345.678-9',
      edad: 50,
      sexo: 'hombre',
      peso: 100,
      talla: 1.65,
    },
    {
      nombre:'Vegeta',
      aPaterno: 'prince',
      aMaterno: 'lun',
      rut: '10.543.876-0',
      edad: 40,
      sexo: 'hombre',
      peso: 120,
      talla: 1.55,

    }
  ];

  nuevo: Persona = {
      nombre:'',
      aPaterno: '',
      aMaterno: '',
      rut: '',
      edad: 0,
      sexo: '',
      peso: 0,
      talla: 0,
  }
 
  agregar( ) {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }
    console.log(this.nuevo);   

    //let imc = this.peso / this.altura * this.altura;    

    this.pacientes.push( this.nuevo);
    this.nuevo = {
      nombre:'',
      aPaterno: '',
      aMaterno: '',
      rut: '',
      edad: 0,
      sexo: '',
      peso: 0,
      talla: 0,
    }
  }  
}

 



