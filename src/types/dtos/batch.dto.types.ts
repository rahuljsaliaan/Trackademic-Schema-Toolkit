import { IBatchAttrs } from '@/types/models/batch.model.types';

export type CreateBatchDTO = Omit<IBatchAttrs, 'programme'>;
