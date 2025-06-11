export const BASE_URL = "http://localhost:3000"

export const api = {
  getAll: () => `/todos`,
  create: () => `/todos/`,
  update: (id: string) => `/todos/${id}`,
  delete: (id: string) => `/todos/${id}`,
}
