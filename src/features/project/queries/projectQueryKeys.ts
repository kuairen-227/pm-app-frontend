export const projectQueryKeys = {
  base: () => ["projects"] as const,

  list: () => [...projectQueryKeys.base(), "list"] as const,
  detail: (id: string) => [...projectQueryKeys.base(), "detail", id] as const,
};
