import { Email, TextShort } from "./generics.type"

export interface CrendentialsDTO{
    email:Email;
    userName:Capitalize<TextShort>
}