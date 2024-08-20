import { IAnnouncementAttrs } from '@/types/models/announcement.model.types';

export type CreateAnnouncementDTO = Omit<
  IAnnouncementAttrs,
  'announcer' | 'targetAudience'
>;
