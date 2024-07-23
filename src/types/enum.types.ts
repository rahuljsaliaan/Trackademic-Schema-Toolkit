// TODO: Completed the roles enum
/**
 * Enum for user roles within an academic institution.
 * @enum {string}
 */
export enum UserRole {
  HeadOfDepartment = 'head-of-department',
  faculty = 'faculty',
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
