export const routes = {
  home: () => "/",
  auth: {
    login: () => "/login",
  },
  project: {
    detail: (projectId: string) => `/projects/${projectId}`,
  },
  ticket: {
    list: (projectId: string) => `/projects/${projectId}/tickets`,
  },
};
