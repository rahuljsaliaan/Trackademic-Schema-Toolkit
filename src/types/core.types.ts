/**
 * Defines the interface for schema generation utilities.
 */
export interface ISchemaGenerator<T> {
  generateSchema<U extends object>(validationObject: U): object;
  getValidatorObject(): T;
}
