// ###############################################################################
// Apollo Server settings
//

export const isProd = process.env.NODE_ENV === 'production';

export const enablePlayground =
  process.env.NODE_ENV !== 'production' || process.env.APOLLO_ENABLE_PLAYGROUND === 'true';

export const introspection =
  process.env.NODE_ENV !== 'production' || process.env.APOLLO_ENABLE_INTROSPECTION === 'true';
