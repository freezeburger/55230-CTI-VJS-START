
/**
 * Traitement as provided from REST API
 */
export interface Traitement{
    id:number;
    patientId:number
    description:string;
    amount:number;
    time:{
        creationDate:number;
        dueDate:number;
    }
}