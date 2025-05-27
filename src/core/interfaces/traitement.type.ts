import { CurrencyAmount, TextLong, TimeExpected, UniqueId } from "./generics.type";
import { RootEntity } from "./root.entity";


/**
 * Traitement as provided from REST API
 */
export interface Traitement extends RootEntity{
    patientId:UniqueId
    description:TextLong;
    amount:CurrencyAmount;
    time:TimeExpected
}

/* 
const isTextShort = (v:string):v is TextShort =>{
    return v.length < 16;
}

const isEmail = (e:string) : e is Email => {
    return true as TODO;
} 
*/