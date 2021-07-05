import React from 'react';
import './TodoItem.scss';

export type TodoType = {
  label: string;
};

export interface TodoItemSchema extends TodoType {
  id: string;
  onDelete?: () => void;
}

export const TodoItem: React.FC<TodoItemSchema> = ({ label, onDelete }) => {
  return (
    <>
      <span>{label}</span>
      <button onClick={onDelete} type="button">
        delete
      </button>
    </>
  );
};
