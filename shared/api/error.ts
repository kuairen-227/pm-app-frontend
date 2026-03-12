export class ApiError extends Error {
  constructor(
    public status: number,
    public traceId?: string,
    message?: string,
  ) {
    super(message ?? `API Error: ${status}`);
  }
}
