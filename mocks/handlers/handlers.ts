import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://localhost:5000/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
