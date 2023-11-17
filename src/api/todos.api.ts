import { API_URL } from '@config';
import TodoType from '../types/Todo.type';

export const fetchAllTodos = async (): Promise<TodoType[]> => {
  const response = await fetch(`${API_URL}/todos`);

  if (!response.ok) {
    console.log('API Error ---> ', response);
    throw new Error('Error occurred while fetching the todos');
  }

  return await response.json();
};

export const updateTodo = async (todo: TodoType): Promise<TodoType> => {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    console.log('API Error ---> ', response);
    throw new Error('Error occurred while updating the todo');
  }

  return await response.json();
};
