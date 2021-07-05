import React from 'react';
import { TodoItem, TodoItemSchema } from '../TodoItem';
import './TodoList.scss';

export interface TodoListSchema {
  list: TodoItemSchema[];
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListSchema> = ({ list, onDelete }) => {
  return (
    <ul className="TodoList">
      {list &&
        list.map(({ id, label }: TodoItemSchema) => (
          <li key={id}>
            <TodoItem onDelete={() => onDelete(id)} id={id} label={label} />
          </li>
        ))}
    </ul>
  );
};
