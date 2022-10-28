import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from '../security/security.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule
  ],
  exports:[
    SecurityComponent
  ]
})
export class SecurityModule { }
