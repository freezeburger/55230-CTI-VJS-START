import { Email, TextShort } from "../interfaces/generics.type"

export interface CrendentialsDTO{
    email:Email;
    userName:Capitalize<TextShort>
}