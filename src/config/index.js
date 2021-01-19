import { castIntEnv } from './lib';

export * from './apollo';

export const PORT = castIntEnv('PORT', 3001);
