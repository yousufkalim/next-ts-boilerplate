import { fetchAllTodos } from '@api/todos.api';

export { Todos as default } from './Todos';

export async function getStaticProps() {
  const todos = await fetchAllTodos();

  if (!todos?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todos,
    },
  };
}
