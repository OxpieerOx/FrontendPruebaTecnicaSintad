import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntidadRoutingModule } from './entidad-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    EntidadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntidadModule { }
