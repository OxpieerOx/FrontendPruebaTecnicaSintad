import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/model/entidad';
import { Router } from '@angular/router';
import { EntidadService } from 'src/app/services/entidad.service';
import { TipoDocumento } from '../../../model/tipodocumento';
import { TipoContribuyente } from '../../../model/tipocontribuyente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestDTO } from '../../../model/requestDTO';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tipoDocumentos : TipoDocumento[]=[];
  TipoContribuyentes : TipoContribuyente[]=[]
  entidadForm:any
  request:RequestDTO = <RequestDTO>{}

  constructor(private router: Router, private service: EntidadService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.service.getTipoDocumento().subscribe(
      response=> {
        this.tipoDocumentos= response
        console.log(this.tipoDocumentos)
      }
    )
    this.service.getTipoContribuyentes().subscribe(
      response=> this.TipoContribuyentes= response
    )

    this.inicializarEntidadForm();
  }


  get nrdocumento(){
    return this.entidadForm.get('nrdocumento');
  }

  get nombrecomercial(){
    return this.entidadForm.get('nombrecomercial');
  }

  get razonsocial(){
    return this.entidadForm.get('razonsocial');
  }

  get direccion(){
    return this.entidadForm.get('direccion');
  }

  get telefono(){
    return this.entidadForm.get('telefono');
  }

  get tipodocumentoid(){
    return this.entidadForm.get('tipodocumentoid');
  }

  get tipocontribuyenteid(){
    return this.entidadForm.get('tipocontribuyenteid');
  }


  inicializarEntidadForm(){
    this.entidadForm = this.formBuilder.group({
      nrdocumento: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(25)]],
      razonsocial:['',[Validators.required,Validators.minLength(5), Validators.maxLength(100),  Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+')]],
      nombrecomercial:['',[Validators.required,Validators.minLength(5), Validators.maxLength(100),  Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+')]],
      direccion:['',[Validators.required,Validators.minLength(5), Validators.maxLength(100),]],
      telefono:['',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
      tipodocumentoid:['',[Validators.required]],
      tipocontribuyenteid:['',[Validators.required]]
    });
  }

  crearEntidad(){
    if(this.entidadForm.invalid){
      alert("INVALIDO");
    }else{
      this.request.nro_documento =this.nrdocumento.value;
      this.request.nombre_comercial =this.nombrecomercial.value;
      this.request.direccion =this.direccion.value;
      this.request.razon_social =this.razonsocial.value;
      this.request.telefono =this.telefono.value;
      this.request.tipoContribuyenteid =this.tipocontribuyenteid.value;
      this.request.tipoDocumentoid =this.tipodocumentoid.value;

      console.log(this.request);
      this.service.crearEntidad(this.request).subscribe(
        data=>{
        alert("Se registro correctamente")}
      )
    }
  }

}
