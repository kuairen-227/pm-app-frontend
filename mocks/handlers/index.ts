import * as authHandlers from "./auth";
import * as projectHandlers from "./project";

export const handlers = [
  ...Object.values(authHandlers),
  ...Object.values(projectHandlers),
];
