
import { CrendentialsDTO } from "./credentials.dto";
import { Civility } from "../interfaces/generics.type";
import { RootDTO } from "./root.dto";

export interface PatientDTO extends RootDTO{
    civility:Civility
    credentials:CrendentialsDTO
}