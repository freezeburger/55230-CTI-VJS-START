import { RootDTO } from "../dto/root.dto";
import { TimeStamp } from "../interfaces/generics.type";

// Conversion d’un DTO vers une entité (TimeStamp -> Date)
export type FromDTO<T> = {
    [K in keyof T]: K extends "time"
    ? {
        [TK in keyof T[K]]: T[K][TK] extends TimeStamp ? Date : T[K][TK]
    }
    : T[K] extends object
    ? FromDTO<T[K]>
    : T[K];
};

// Conversion d’une entité vers un DTO (Date -> TimeStamp)
export type ToDTO<T> = {
    [K in keyof T]: K extends "time"
    ? {
        [TK in keyof T[K]]: T[K][TK] extends Date ? TimeStamp : T[K][TK]
    }
    : T[K] extends object
    ? ToDTO<T[K]>
    : T[K];
};


export interface EntityMapper<D extends RootDTO> {
    serialize(entity: FromDTO<D> ): D;
    unserialize(dto: D): FromDTO<D>;
}
