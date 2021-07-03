import React from 'react';
import { Hello } from '../Hello';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};
