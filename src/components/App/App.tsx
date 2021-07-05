import React, { useState, useEffect } from 'react';
import { TodoList } from '../TodoList';
import { TodoType, TodoItemSchema } from '../TodoItem';
import { db } from '../../firebase';

export const App: React.FC = () => {
  const [list, setList] = useState<TodoItemSchema[]>([]);
  const [todoLabel, setTodoLabel] = useState<string>('');

  useEffect(() => {
    db.collection('todos')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { label } = doc.data() as TodoType;
          setList((l) => [...l, { label, id: doc.id }]);
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error: ', error);
      });
  }, []);

  const onDelete = (id: string) => {
    db.collection('todos')
      .doc(id)
      .delete()
      .then(() => {
        setList(list.filter((item) => item.id !== id));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error removing document: ', error);
      });
  };

  const changeText = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    setTodoLabel(target.value);
  };

  const saveToList = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    db.collection('todos')
      .add({
        label: todoLabel,
      })
      .then((docRef) => {
        setList([...list, { label: todoLabel, id: docRef.id }]);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={saveToList}>
        <input type="text" onInput={changeText} />
        <input type="submit" />
      </form>
      <TodoList onDelete={onDelete} list={list} />
    </div>
  );
};
