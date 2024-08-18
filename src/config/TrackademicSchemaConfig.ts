// import { configDotenv } from 'dotenv';

// configDotenv();

export const TrackademicSchemaConfig = Object.freeze({
  Auth: {
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MAX_LENGTH: 64,
    OTP_LENGTH: 4
  },

  Academics: {
    MAX_SEMESTER: 10
  }
});
