export const routes = {
  home: () => "/",
  auth: {
    login: () => "/login",
  },
  project: {
    new: () => "/projects/new",
    detail: (projectId: string) => `/projects/${projectId}`,
    edit: (projectId: string) => `/projects/${projectId}/edit`,
    members: (projectId: string) => `/projects/${projectId}/members`,
    settings: (projectId: string) => `/projects/${projectId}/settings`,
  },
  ticket: {
    list: (projectId: string) => `/projects/${projectId}/tickets`,
  },
};
