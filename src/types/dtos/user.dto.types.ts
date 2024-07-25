import { IUserAttrs } from '@/types/models/user.model.types';
import { UserRole } from '@/types/enum.types';

// Create Student DTO
type OmitStudentAndFacultyDetails = Omit<
  IUserAttrs,
  'password' | 'role' | 'studentDetails' | 'facultyDetails'
>;

type OmitBatchFromStudentDetails = Omit<IUserAttrs['studentDetails'], 'batch'>;

export type CreateStudentDTO = OmitStudentAndFacultyDetails & {
  studentDetails: OmitBatchFromStudentDetails;
} & {
  role: UserRole.Student;
};

// Create Faculty DTO
type OmitProgrammeFromFacultyDetails = Pick<
  IUserAttrs['facultyDetails'],
  'designation'
>;

export type CreateFacultyDTO = OmitStudentAndFacultyDetails & {
  facultyDetails: OmitProgrammeFromFacultyDetails;
} & {
  role: Omit<IUserAttrs['role'], 'student'>;
};
