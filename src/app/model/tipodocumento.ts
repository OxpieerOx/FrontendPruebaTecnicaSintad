export class TipoDocumento{

    id_tipo_documento?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string; 
    estado?: string; 
    
    constructor(){
    this.id_tipo_documento = 0;
    this.codigo = "";
    this.nombre = "";
    this.descripcion = "";
    this.estado = "";
    }
}
