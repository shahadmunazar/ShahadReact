export const rootPaths = {
  homeRoot: '/',
  CateoryRoot: '/category',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  category: `/${rootPaths.CateoryRoot}`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  404: `/${rootPaths.errorRoot}/404`,
};
