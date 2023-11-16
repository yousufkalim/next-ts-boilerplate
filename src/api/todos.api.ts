import { API_URL } from '@config';
import TodoType from '../types/Todo.type';

export const fetchAllTodos = async (): Promise<TodoType[]> => {
  try {
    const response = await fetch(`${API_URL}/todos`);

    return await response.json();
  } catch (err) {
    console.log('API Error ---> ', err);
    throw new Error('Error occurred while fetching the todos');
  }
};

export const updateTodo = async (todo: TodoType): Promise<TodoType> => {
  try {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return await response.json();
  } catch (err) {
    console.log('API Error ---> ', err);
    throw new Error('Error occurred while updating the todo');
  }
};
