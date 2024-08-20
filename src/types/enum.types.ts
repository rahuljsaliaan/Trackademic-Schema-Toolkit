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
  Attendance = 'Attendance',
  Announcement = 'Announcement'
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
  Principal = 'principal',
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
  AttendanceId = 'attendanceId',
  AssignedSubjectId = 'assignedSubjectId'
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
  FacultySchedule = 'facultySchedule',
  Month = 'month',
  Year = 'year', 
  Approved = 'approved', 
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

  // auth
  Auth = 'auth',
  ChangePassword = 'change-password',
  ForgotPassword = 'forgot-password',
  ResetPassword = 'reset-password',
  VerifyOTP = 'verify-otp',
  Login = 'login',
  Logout = 'logout',
  RefreshToken = 'refresh-token',

  // faculty
  Faculty = 'faculty',

  // programme
  Programme = 'programme',

  // batch
  Batch = 'batch',

  // subject
  Subject = 'subject',

  // enrollment
  Enrollment = 'enrollment',
  AllEnrolledStudents = 'all-enrolled-students',

  // assigned subject
  AssignedSubject = 'assigned-subject',
  Note = 'note',

  // batch schedule
  BatchSchedule = 'batch-schedule',

  // attendance
  Attendance = 'attendance',
  AbsentRecords = 'absent-records',

  // attendance stats
  AttendanceStats = 'attendance-stats',

  // user
  CurrentUser = 'current-user',
  User = 'user',

  // student
  Student = 'student',
  AssignBatch = 'assign-batch',

  // Faculty Schedule
  FacultySchedule = 'faculty-schedule',

  // Announcement
  Announcement = 'announcement'
}
