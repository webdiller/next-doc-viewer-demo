export interface TodoResponse {
  todos: Todo[],
  total: number,
  skip: number,
  limit: number,
}

export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}
