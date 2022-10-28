import { Injectable } from '@angular/core';

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { responseDTO } from '../model/responseDTO';
import { TipoContribuyente } from '../model/tipocontribuyente';
import { TipoDocumento } from '../model/tipodocumento';
import { RequestDTO } from '../model/requestDTO';
import { EntidadUpdateDTO } from '../model/entidadRequestUpdateDTO';
import { Entidad } from '../model/entidad';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')!
    }
  )
};


@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private urlService = environment.apiEndPoint + 'mantenedor/api/entidad';
  private urlContribuyente = "http://localhost:5000/mantenedor/api/contribuyente"
  private urlTipoDocumento = "http://localhost:5000/mantenedor/api/tipodocumento"

  constructor(private http:HttpClient) { 

  }

  getEntidades(): Observable<responseDTO>
  {
      return this.http.get<responseDTO>(this.urlService+"/listar",httpOptions);
  }

  getTipoContribuyentes():Observable<TipoContribuyente[]>{
    return this.http.get<TipoContribuyente[]>(this.urlContribuyente+"/listar",httpOptions);
  }

  getTipoDocumento():Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(this.urlTipoDocumento+"/listar",httpOptions);
  }
  
  crearEntidad(request:RequestDTO):Observable<any>{
    return this.http.post<any>(this.urlService+"/save",request,httpOptions)
  }

  editarEntidad(requestupdate:EntidadUpdateDTO,id:number):Observable<any>{
    return this.http.post<any>(this.urlService+"/update/"+id,requestupdate,httpOptions)
  }

  buscarEntidad(identidad:number):Observable<Entidad>{

    return this.http.get<Entidad>(this.urlService+"/byid/"+identidad,httpOptions);
  }

  eliminarEntidad(identidad:number):Observable<responseDTO>{

    return this.http.delete<any>(this.urlService+"/delete/"+identidad,httpOptions);
  }
}
