/**
 * Enum representing the names of MongoDB models.
 * @enum {string}
 */
export enum MongoDBModelNames {
  Health = 'Health',
  User = 'User',
  Programme = 'Programme',
  Batch = 'Batch',
  Subject = 'Subject',
  Enrollment = 'Enrollment',
  AssignedSubject = 'AssignedSubject',
  TimeSlot = 'TimeSlot',
  BatchSchedule = 'BatchSchedule',
  FacultySchedule = 'FacultySchedule',
  Attendance = 'Attendance'
}

/**
 * Enum representing MongoDB/Mongoose filter operators.
 * @enum {string}
 */
export enum MongoDBFilterOperator {
  Gte = 'gte',
  Gt = 'gt',
  Lte = 'lte',
  Lt = 'lt'
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
 * Enum representing the attendance status of a student.
 * @enum {string}
 */
export enum AttendanceStatus {
  Present = 'present',
  Absent = 'absent'
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
 * Enum representing the days of the week for scheduling purposes.
 * @enum {string}
 */
export enum ScheduleDay {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday'
}

/**
 * Enum for API route parameters.
 * @enum {string}
 */
export enum APIRouteParamV1 {
  // Params
  userID = 'userId',
  StudentID = 'studentId',
  FacultyId = 'facultyId',
  SubjectId = 'subjectId',
  ProgrammeId = 'programmeId',
  BatchId = 'batchId',
  EnrollmentId = 'enrollmentId',
  BatchScheduleId = 'batchScheduleId',
  AttendanceId = 'attendanceId'
}

/**
 * Enum representing query helper parameters.
 * @enum {string}
 */
export enum QueryHelperParam {
  Page = 'page',
  Limit = 'limit',
  SortBy = 'sortBy',
  Order = 'order'
}

/**
 * Type representing a combination of common query parameters and MongoDB filter operators.
 * This type can be used to accept both common query parameters and MongoDB filter operators.
 */
export type QueryHelperParamsType = QueryHelperParam | MongoDBFilterOperator;

/**
 * Enum for API query parameters.
 * @enum {string}
 */
export enum APIQueryParamV1 {
  Semester = 'semester',
  Day = 'day',
  Subject = 'subject',
  FacultySchedule = 'facultySchedule'
}

/**
 * Type representing API query parameters for version 1.
 */
export type APIQueryParamV1Type = APIQueryParamV1 | QueryHelperParamsType;

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
  AllEnrolledStudents = 'all-enrolled-students',
  AssignedSubject = 'assigned-subject',
  BatchSchedule = 'batch-schedule',
  Attendance = 'attendance',
  StudentAttendanceSummary = 'student-attendance-summary',
  AttendanceStats = 'attendance-stats',

  // sub resources
  // user
  Login = 'login',
  Logout = 'logout',
  CurrentUser = 'current-user',
  ChangePassword = 'change-password',
  ForgotPassword = 'forgot-password',

  // student
  AssignBatch = 'assign-batch',

  // Get Faculty Timetable
  FacultySchedule = 'faculty-schedule',
  RefreshToken = 'refresh-token'
}
