import { IEnrollmentAttrs } from '@/types/models/enrollment.model.types';

export type CreateEnrollmentDTO = Omit<IEnrollmentAttrs, "student">;
