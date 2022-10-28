import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/model/entidad';
import { Router } from '@angular/router';
import { EntidadService } from 'src/app/services/entidad.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entidades : Entidad[] = []; 
  private errorMessage: string = "";

  constructor(private router: Router, private service: EntidadService) { }

  ngOnInit(): void {
    this.getEntidades();
  }

  public getEntidades(){
    this.service.getEntidades().subscribe(
      services=>{
        console.log(services);
        this.entidades=services.data;
        
        console.log(this.entidades);
      },
      error=>{
        this.errorMessage = <any>error;
      }
    );
  }

  public redirectEditar(idEntidad: number) {
    this.router.navigate(['/dashboard/entidad/editar/' + idEntidad]);
    return true;
  }

  eliminarproducto(id:number){
    this.service.eliminarEntidad(id).subscribe(
      data=>{
        alert("Se Elimino correctamente")
        this.entidades = this.entidades.filter(entidad=> entidad.id_entidad !=id)
      }
    )
  }
}
