export const routes = {
  public: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
  },
  authorized: {
    resetPassword: '/reset-password',
    createAgent: '/agent/create',
    settings: {
      general: '/settings',
      account: '/settings/account',
    },
  },
};

export const settingsRoutes = collectStrings(routes.authorized.settings);

export const authorizedRoutes = collectStrings(routes.authorized);

function collectStrings(obj: any): string[] {
  let result: string[] = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      result = result.concat(collectStrings(obj[key]));
    }
  }

  return result;
}
