import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  //newArr:any[]=[];
  deleteHeroe:string="";
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitan America']

  borrarHeroe () {
    console.log("borrando...");
    const deleteHeroe = this.heroes.shift() || "";
    this.deleteHeroe =deleteHeroe;
    console.log(deleteHeroe);
    //this.newArr.push(deleteHeroe)
    // console.log(this.newArr);

  }

  
}
