import { z, ZodObject, ZodType } from "zod";
import { ISchemaGenerator } from "@/types/core.types";

type ZodValidator = typeof z;

/**
 * Implements the ISchemaGenerator interface to generate Zod schemas for validation.
 */
class ZodSchemaGenerator implements ISchemaGenerator<ZodValidator> {
  private _validatorObject: ZodValidator;

  /**
   * Generates a Zod schema based on the provided validation object.
   * @template T - The type of the object to validate.
   * @param {Object} zodValidationObject - An object where each key is a property of T and each value is a Zod type for that property.
   * @returns {ZodObject} A Zod schema object for the given validation object.
   */
  generateSchema<T extends object>(zodValidationObject: {
    [K in keyof T]: ZodType<T[K]>;
  }): ZodObject<{ [K in keyof T]: ZodType<T[K]> }> {
    return z.object(zodValidationObject);
  }

  getValidatorObject() {
    return this._validatorObject;
  }

  constructor(z: ZodValidator) {
    this._validatorObject = z;
  }
}

export default new ZodSchemaGenerator(z);
