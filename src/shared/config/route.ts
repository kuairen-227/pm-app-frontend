export const routes = {
  home: () => "/",
  auth: {
    login: () => "/login",
  },
  project: {
    detail: (projectId: string) => `/projects/${projectId}`,
    new: () => "/projects/new",
  },
  ticket: {
    list: (projectId: string) => `/projects/${projectId}/tickets`,
  },
};
