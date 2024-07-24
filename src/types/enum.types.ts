/**
 * Enum representing the names of MongoDB models.
 * @enum {string}
 */
export enum MongoDBModelNames {
  /** Represents the User model */
  User = 'User',
  /** Represents the Programme model */
  Programme = 'Programme',
  /** Represents the Batch model */
  Batch = 'Batch',
  /** Represents the Subject model */
  Subject = 'Subject',
  /** Represents the Enrollment model */
  Enrollment = 'Enrollment'
}

// TODO: Completed the roles enum
/**
 * Enum for user roles within an academic institution.
 * @enum {string}
 */
export enum UserRole {
  HeadOfDepartment = 'head-of-department',
  Student = 'student',
  Principle = 'principle',
  Faculty = 'faculty'
}

/**
 * Defines the password settings for the application.
 * Specifies the minimum and maximum password length requirements.
 * @enum {number}
 */
export enum PasswordSettings {
  MaxPasswordLength = 64, // Maximum allowed password length.
  MinPasswordLength = 8 // Minimum required password length.
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
