// ###############################################################################
// Helpers for casting environment variables
//

export const castBooleanEnv = (envVar, defaultValue = false) =>
  process.env[envVar] ? process.env[envVar]?.toLowerCase() === 'true' : defaultValue;

export const castIntEnv = (envVar, defaultValue) =>
  parseInt(process.env[envVar], 10) || defaultValue;

export const castStringArrayEnv = (envVar) =>
  process.env[envVar]?.length ? process.env[envVar].split(',').map((field) => field.trim()) : [];
