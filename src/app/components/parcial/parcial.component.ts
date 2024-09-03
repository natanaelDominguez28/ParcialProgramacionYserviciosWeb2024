import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parcial',
  standalone: true,
  imports: [NgFor],
  templateUrl: './parcial.component.html',
  styleUrl: './parcial.component.css'
})
export class ParcialComponent {
  titulo:string = '';
  ingredientes = [];
  preparacion=[];
  recetas = [
    {path:'', title:'', image:''}
  ];

  constructor(private recipeService:RecipeService) {}

  public cargarRecetas(){
    this.recipeService.getRecipesPopular().subscribe(
      (result) => {
        this.recetas = result;
        console.log(this.recetas);
      });
  }

  public obtenerDetalle(ruta:string){
    if(ruta != "")
    {
      this.recipeService.getRecipesDetails(ruta).subscribe(
      (result) =>{
        //console.log(result);
        this.ingredientes = result.Ingredientes;
        //console.log(this.ingredientes);
        this.preparacion = result["Pasos de preparacion"];
        //console.log(this.preparacion);
        this.titulo=result["Titulo de la preparacion"];
      }
    );
   }
  }

}
