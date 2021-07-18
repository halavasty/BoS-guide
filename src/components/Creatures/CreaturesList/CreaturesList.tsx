import React from 'react';
import { cn } from '@bem-react/classname';
import './CreatureList.scss';
import { CreatureSchema } from '../CreatureSchema';
import { Image } from '../../Image';
import { CreaturesData } from '../apollo';

const cnCreaturesList = cn('CreaturesList');

interface CreatureListI extends CreaturesData {
  onChange?: (id: string) => void;
}

export const CreatureList: React.FC<CreatureListI> = ({ creatures }) => {
  return (
    <ul className={cnCreaturesList()}>
      {creatures &&
        creatures.map((creature: CreatureSchema) => (
          <li key={creature.id} className={cnCreaturesList('Item')}>
            <Image url={creature.icon.url} />
          </li>
        ))}
    </ul>
  );
};
