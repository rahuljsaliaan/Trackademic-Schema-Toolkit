import {
  IHealthAttrs,
  IHealthDocument,
} from "@/types/models/health.model.types";
import { AllKeys, DTOFactory } from "@/types/utility.types";

export type CreateHealthDTO = DTOFactory<
  IHealthDocument,
  AllKeys<IHealthAttrs>
>;
