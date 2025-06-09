export const API_BASE_URL = "http://localhost:3000"

export const api = {
  todos: {
    getAll: () => `${API_BASE_URL}/todos`,
    create: () => `${API_BASE_URL}/todos/`,
    update: (id) => `${API_BASE_URL}/todos/${id}`,
    delete: (id) => `${API_BASE_URL}/todos/${id}`,
  },
}
