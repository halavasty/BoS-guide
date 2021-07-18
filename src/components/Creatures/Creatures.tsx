import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { cn } from '@bem-react/classname';
import './Creatures.scss';
import { Effects } from '../Effects';
import { CreatureSchema } from './CreatureSchema';
import { CreaturesData, CREATURES_LIST } from './apollo';
import { EffectSchema } from '../Effects/EffectSchema';
import { CreatureList } from './CreaturesList';

const cnCreatures = cn('Creatures');

export const Creatures: React.FC = () => {
  const { loading, error, data } = useQuery<CreaturesData>(CREATURES_LIST);
  const [currentEffect, setEffect] = useState<string>('');
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

  const onClean = () => {
    setEffect('');
  };

  return (
    <div className={cnCreatures()}>
      <Effects active={currentEffect} onClean={onClean} onChange={onChange} />
      {creatures ? <CreatureList creatures={creatures} /> : null}
    </div>
  );
};
