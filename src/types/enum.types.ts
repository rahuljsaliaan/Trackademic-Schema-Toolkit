/**
 * Enum representing the names of MongoDB models.
 * @enum {string}
 */
export enum MongoDBModelNames {
  User = 'User',
  Programme = 'Programme',
  Batch = 'Batch',
  Subject = 'Subject',
  Enrollment = 'Enrollment',
  AssignedSubject = 'AssignedSubject',
  BatchSchedule = 'BatchSchedule',
  Attendance = 'Attendance'
}

// TODO: Completed the roles enum
/**
 * Enum for user roles within an academic institution.
 * @enum {string}
 */
export enum UserRole {
  HeadOfDepartment = 'hod',
  Student = 'student',
  Principle = 'principle',
  Faculty = 'faculty'
}

/**
 * Enum representing different sections of a batch.
 * @enum {string}
 */
export enum BatchSection {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J'
}

/**
 * Enum representing the maximum number of semesters.
 * @enum {number}
 */
export enum MaxSemester {
  Default = 10
}

/**
 * Enum representing the attendance status of a student.
 * @enum {string}
 */
export enum AttendanceStatus {
  Present = 'present',
  Absent = 'absent'
}

/**
 * Enum for API route parameters.
 * @enum {string}
 */
export enum APIRouteParamV1 {
  userID = 'userId',
  StudentID = 'studentId',
  FacultyId = 'facultyId',
  SubjectId = 'subjectId',
  ProgrammeId = 'programmeId',
  BatchId = 'batchId',
  EnrollmentId = 'enrollmentId',
  BatchScheduleId = 'batch-scheduleId',
  AttendanceId = 'attendanceId'
}

/**
 * Enum for API resources in version 1.
 * @enum {string}
 */
export enum APIResourceV1 {
  Health = 'health',
  Auth = 'auth',
  User = 'user',
  Student = 'student',
  Faculty = 'faculty',
  Programme = 'programme',
  Batch = 'batch',
  Subject = 'subject',
  Enrollment = 'enrollment',
  AssignedSubject = 'assigned-subject',
  BatchSchedule = 'batch-schedule',
  Attendance = 'attendance',

  // sub resources
  // user
  Login = 'login',
  CurrentUser = 'current-user',
  ChangePassword = 'change-password',
  ForgotPassword = 'forgot-password',

  // student
  AssignBatch = 'assign-batch'
}
