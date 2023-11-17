import { fetchAllTodos } from '@api/todos.api';
import TodoType from '../../types/Todo.type';

export { Todos as default } from './Todos';

export async function getStaticProps(): Promise<{ props: { todos: TodoType[] | [] } }> {
  try {
    const todos = await fetchAllTodos();

    return {
      props: {
        todos,
      },
    };
  } catch (err) {
    return {
      props: {
        todos: [],
      },
    };
  }
}
