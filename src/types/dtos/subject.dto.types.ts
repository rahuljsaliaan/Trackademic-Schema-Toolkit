import { ISubjectAttrs } from '@/types/models/subject.model.types';

export type CreateSubjectDTO = Omit<ISubjectAttrs, 'totalNumberOfClasses'> & {
  totalNumberOfClasses?: ISubjectAttrs['totalNumberOfClasses'];
  totalMinsInClass: number;
};
