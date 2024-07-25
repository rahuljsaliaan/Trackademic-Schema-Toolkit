import { ISubjectAttrs } from '@/types/models/subject.model.types';

export type CreateSubjectDTO = Omit<ISubjectAttrs, 'programme'>;
