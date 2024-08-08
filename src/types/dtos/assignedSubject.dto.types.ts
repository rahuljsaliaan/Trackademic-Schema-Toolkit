import { IAssignedSubjectDocument } from '@/types/models/assignedSubject.model.types';

export type AddOrUpdateNoteDTO = Pick<IAssignedSubjectDocument, 'note'>;
