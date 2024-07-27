import { IUserAttrs } from '@/types/models/user.model.types';
import { UserRole } from '@/types/enum.types';

// Helper types
type BasicUserAttrs = Omit<
  IUserAttrs,
  'password' | 'role' | 'programme' | 'studentDetails' | 'facultyDetails'
>;

type PartialStudentDetails = Partial<IUserAttrs['studentDetails']>;
type FacultyDetailsWithoutProgramme = Pick<
  IUserAttrs['facultyDetails'],
  'designation'
>;

// Create Student DTO
export type CreateStudentDTO = BasicUserAttrs;

export type UpdateStudentDTO = Partial<
  BasicUserAttrs & {
    studentDetails: PartialStudentDetails;
  }
>;

export interface IAssignStudentsToBatch {
  batchId: string;
  students: string[];
}

/**
 * Data Transfer Object for assigning students to a batch.
 * @typedef {Object} AssignStudentsToBatchDTO
 * @property {string[]} students - An array of student IDs.
 */
export type AssignStudentsToBatchDTO = {
  students: IAssignStudentsToBatch['students'];
};

// Create Faculty DTO
export type CreateFacultyDTO = BasicUserAttrs & {
  facultyDetails: FacultyDetailsWithoutProgramme;
  role: Exclude<IUserAttrs['role'], UserRole.Student>;
};
