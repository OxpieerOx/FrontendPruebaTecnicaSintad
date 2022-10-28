import { TipoDocumento } from "./tipodocumento";
import { TipoContribuyente } from './tipocontribuyente';

export interface Entidad{

    id_entidad?: number;
    tipoDocumento?: TipoDocumento;
    nro_documento?: string;
    razon_social?: string;
    nombre_comercial?: string;
    tipoContribuyente?: TipoContribuyente
    direccion?: string;
    telefono?: string;
    estado?:boolean

    // constructor(){
    // this.id_entidad = 0;
    // this.TipoContribuyente = new TipoContribuyente;
    // this.nro_documento = "";
    // this.razon_social = "";
    // this.nombre_comercial = "";
    // this.direccion = "";
    // this.telefono = "";
    // this.estado = true;
    // }
}
