import { CreateHealthDTO } from "@/types/dtos/health.dto.types";
import zodSchemaGenerator from "@/utils/validators/ZodSchemaGenerator";
const z = zodSchemaGenerator.getValidatorObject();

export const createHealthSchema =
  zodSchemaGenerator.generateSchema<CreateHealthDTO>({
    testName: z.string().min(2).max(100),
    testDepartmentName: z
      .string()
      .regex(/^[A-Za-z\s]+$/, "Department name must contain only alphabets")
      .min(2)
      .max(100),
  });
