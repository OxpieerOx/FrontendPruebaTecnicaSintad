export class responseDTO{

    message!: string;
    success!: boolean;
    data!: any;
  
    constructor(){
      this.message = "";
      this.success = true;
      this.data = "";
    }
  }
  