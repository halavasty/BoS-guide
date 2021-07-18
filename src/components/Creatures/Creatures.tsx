import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { cn } from '@bem-react/classname';
import './Creatures.scss';
import { Image } from '../Image';
import { Effects } from '../Effects';
import { CreatureSchema } from './CreatureSchema';
import { CreaturesData, CREATURES_LIST } from './apollo';
import { EffectSchema } from '../Effects/EffectSchema';

const cnCreatures = cn('Creatures');

export const Creatures: React.FC = () => {
  const { loading, error, data } = useQuery<CreaturesData>(CREATURES_LIST);
  const [currentEffect, setEffect] = useState<string>();
  const [creatures, setCreatures] = useState<CreatureSchema[] | undefined>([]);

  useEffect(() => {
    if (!currentEffect) {
      setCreatures(data?.creatures);
    }
  }, [currentEffect, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onChange = (id: string) => {
    setEffect(id);
    setCreatures(
      data?.creatures.filter((creature: CreatureSchema) => {
        return creature.effects.some(
          (effect: EffectSchema) => effect.id === id
        );
      })
    );
  };

  return (
    <div className={cnCreatures()}>
      <Effects onChange={onChange} />
      <ul className={cnCreatures('List')}>
        {creatures &&
          creatures.map((creature: CreatureSchema) => (
            <li key={creature.id} className={cnCreatures('Item')}>
              <Image url={creature.icon.url} />
            </li>
          ))}
      </ul>
    </div>
  );
};
