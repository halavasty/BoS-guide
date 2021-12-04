import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import './TroopItem.scss';
import { TroopSchema } from './__generated__/Troop.fragment';

export const cnTroopItem = cn('TroopItem');

export interface TroopItemSchema {
  troop: TroopSchema;
  onChange?: () => void;
  className?: string;
}

export const TroopItem: React.FC<TroopItemSchema> = ({ troop }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={cnTroopItem()}>
      <ul>
        <li>имя: {troop.name}</li>
        <li>урон: {troop.attack * count}</li>
        <li>зажита: {troop.defense * count}</li>
        <li>жизни: {troop.health * count}</li>
      </ul>
      <div>
        <p>
          размер отряда - {count}{' '}
          <input
            type="number"
            name="count"
            onChange={(event) => setCount(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
};
