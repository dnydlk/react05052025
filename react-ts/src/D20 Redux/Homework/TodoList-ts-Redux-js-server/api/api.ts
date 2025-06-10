export const API_BASE_URL = "http://localhost:3000"

export const api = {
  getAll: () => `${API_BASE_URL}/todos`,
  create: () => `${API_BASE_URL}/todos/`,
  update: (id: string) => `${API_BASE_URL}/todos/${id}`,
  delete: (id: string) => `${API_BASE_URL}/todos/${id}`,
}
