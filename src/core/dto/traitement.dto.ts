import { CurrencyAmount, TextLong, TimeExpected, UniqueId } from "../interfaces/generics.type";
import { RootDTO } from "./root.dto";


/**
 * Traitement as provided from REST API
 */
export interface TraitementDTO extends RootDTO{
    patientId:UniqueId
    description:TextLong;
    amount:CurrencyAmount;
    time:TimeExpected
}

