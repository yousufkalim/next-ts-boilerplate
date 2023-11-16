import { useQuery } from 'react-query';
import { fetchAllTodos } from '@api/todos.api';
import { TodoItem } from '@components/Todos';
import TodoType from '../../types/Todo.type';

import ClockIcon from '@assets/clock.svg';
import ListIcon from '@assets/list.svg';

interface PropTypes {
  todos: TodoType[];
}

export function Todos(props: PropTypes) {
  const { data = [] } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchAllTodos,
    initialData: props.todos,
  });

  const todos = [
    data.filter((todo) => todo.completed).slice(0, 2),
    data.filter((todo) => !todo.completed).slice(0, 4),
  ].flat();

  return (
    <main className="bg-[#F3F4F6] text-slate-700 min-h-screen w-100 flex items-center">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-medium">Tasks list</h1>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <a
              href="#"
              className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500"
            >
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm font-medium hidden md:block">Urgent</span>
            </a>
            <a
              href="#"
              className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200"
            >
              <ListIcon className="w-4 h-4" />
              <span className="text-sm hidden md:block">Latest</span>
            </a>
          </div>
        </div>
        <p className="text-slate-500">Hello, here are your latest tasks</p>

        <div id="tasks" className="my-5">
          {todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
        </div>
        <p className="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
      </div>
    </main>
  );
}
