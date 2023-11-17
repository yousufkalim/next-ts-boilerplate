import { fetchAllTodos } from '@api/todos.api';

export { Todos as default } from './Todos';

export async function getStaticProps() {
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
