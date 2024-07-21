import { Document } from "mongoose";

/** Creates a type by picking a subset of properties from T. */
export type DTOFactory<T extends Document, K extends keyof T> = Pick<T, K>;

/** Extracts the keys of type T as a union of literal types. */
export type AllKeys<T> = keyof T;
