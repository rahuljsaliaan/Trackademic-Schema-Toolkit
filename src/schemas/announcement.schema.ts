import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateAnnouncementDTO } from '@/types/dtos/announcement.dto.types';

const z = ZodSchemaGenerator.getValidatorObject();

export const createAnnouncementSchema =
  ZodSchemaGenerator.generateSchema<CreateAnnouncementDTO>({
    announcementSubject: z
      .string()
      .min(1, { message: 'Announcement subject is required' }),
    announcementContent: z
      .string()
      .min(1, { message: 'Announcement content is required' })
  });
