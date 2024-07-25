import { Document, Types } from 'mongoose';

/** Creates a type by picking a subset of properties from T. */
export type DTOFactory<T extends Document, K extends keyof T> = Pick<T, K>;

/** Extracts the keys of type T as a union of literal types. */
export type AllKeys<T> = keyof T;

/** Type definition for a Mongoose ObjectId. */
export type MongooseObjectId = Types.ObjectId;

/**
 * Utility type to recursively omit properties from nested objects.
 *
 * @template T - The type from which properties will be omitted.
 * @template K - The keys of the properties to omit.
 */
export type DeepOmit<T, K extends keyof T> = {
  [P in keyof T]: P extends K
    ? never
    : T[P] extends object
    ? DeepOmit<T[P], Extract<K, keyof T[P]>>
    : T[P];
};
