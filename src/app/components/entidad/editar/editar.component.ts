import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestDTO } from 'src/app/model/requestDTO';
import { TipoContribuyente } from 'src/app/model/tipocontribuyente';
import { TipoDocumento } from 'src/app/model/tipodocumento';
import { EntidadService } from 'src/app/services/entidad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { responseDTO } from 'src/app/model/responseDTO';
import { Entidad } from 'src/app/model/entidad';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  entidadForm:any
  tipoDocumentonombre:any
  tipoDocumentos : TipoDocumento[]=[];
  TipoContribuyentes : TipoContribuyente[]=[]
  request:RequestDTO = <RequestDTO>{}
  response:responseDTO = <responseDTO>{}
  id?: any;
  entidadcargada:Entidad = <Entidad>{}
  y:any

  constructor(private activeRoute: ActivatedRoute,private router: Router, private service: EntidadService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.id = this.activeRoute.snapshot.paramMap.get('id')!
    var y : number = +this.id
    this.service.getTipoDocumento().subscribe(
      response=> {
        this.tipoDocumentos= response
        console.log(this.tipoDocumentos)
      }
    )
    this.service.getTipoContribuyentes().subscribe(
      response=> this.TipoContribuyentes= response
    )
    
    this.service.buscarEntidad(y).subscribe(
      response=>{
        console.log(response);
        this.tipoDocumentonombre = response.tipoDocumento?.nombre
        this.entidadcargada = response;
      }
    )

    this.inicializarEntidadForm()
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

  Actualizar()
  {
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
      this.service.editarEntidad(this.request,this.id).subscribe(
        data=>{
        console.log(data)}
      )
    }
  }

}
