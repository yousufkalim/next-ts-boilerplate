import { FC, useState } from 'react';
import { useMutation } from 'react-query';
import { updateTodo } from '@api/todos.api';
import toast from 'react-hot-toast';
import TodoType from '../../types/Todo.type';

import CheckboxIcon from '@assets/img/checkbox.svg';
import TickIcon from '@assets/img/tick.svg';

interface PendingItemType {
  todo: TodoType;
  handleCompleteTodo: (todo: TodoType) => void;
}

export const PendingItem: FC<PendingItemType> = function ({ todo, handleCompleteTodo }) {
  return (
    <div
      id="task"
      className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150"
    >
      <div className="inline-flex items-center space-x-2">
        <div
          onClick={() => {
            handleCompleteTodo(todo);
          }}
        >
          <CheckboxIcon className="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer" />
        </div>
        <div>{todo.title}</div>
      </div>
    </div>
  );
};

export const CompletedItem: FC<{ todo: TodoType }> = function ({ todo }) {
  return (
    <div
      id="task"
      className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
    >
      <div className="inline-flex items-center space-x-2">
        <div>
          <TickIcon className="w-6 h-6 text-slate-500" />
        </div>
        <div className="text-slate-500 line-through">{todo.title}</div>
      </div>
    </div>
  );
};

export const TodoItem: FC<{ todo: TodoType }> = function (props) {
  const [todo, setTodo] = useState(props.todo);

  // Create a mutation function
  const mutation = useMutation(updateTodo);

  const handleCompleteTodo = (todo: TodoType): void => {
    mutation.mutate(
      { ...todo, completed: true },
      {
        onSuccess: () => {
          setTodo({ ...todo, completed: true });
          toast.success('The task has been completed');
        },
        onError: () => {
          toast.error('Error occurred while updating the todo');
        },
      },
    );
  };

  return todo.completed ? (
    <CompletedItem todo={todo} />
  ) : (
    <PendingItem todo={todo} handleCompleteTodo={handleCompleteTodo} />
  );
};
