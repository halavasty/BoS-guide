import React from 'react';
import { cn } from '@bem-react/classname';
import { useTroopList } from './__generated__/Troop.query';
import { TroopItem } from './TroopsItem';
import './Troop.scss';

export const cnTroops = cn('Troops');

export const Troops: React.FC = () => {
  const { loading, error, data } = useTroopList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data && data.troops ? (
    <div className={cnTroops()}>
      <header>Виды войск</header>
      <div className={cnTroops('List')}>
        {data.troops &&
          data.troops.map(
            (troop) =>
              troop && (
                <>
                  <TroopItem key={troop.id} troop={troop} />
                </>
              )
          )}
      </div>
    </div>
  ) : null;
};
