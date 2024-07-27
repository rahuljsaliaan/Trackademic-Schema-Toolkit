import { configDotenv } from 'dotenv';

configDotenv();

export const TrackademicSchemaConfig = Object.freeze({
  Auth: {
    PASSWORD_MIN_LENGTH: parseInt(<string>process.env.PASSWORD_MIN_LENGTH) || 8,
    PASSWORD_MAX_LENGTH: parseInt(<string>process.env.PASSWORD_MAX_LENGTH) || 64
  }
});
