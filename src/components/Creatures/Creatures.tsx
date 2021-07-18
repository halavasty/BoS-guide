import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { cn } from '@bem-react/classname';
import './Creatures.scss';
import { Image } from '../Image';
import { ImageSchema } from '../Image/ImageSchema';
import { Effects, EffectSchema } from '../Effects';

const cnCreatures = cn('Creatures');

interface CreatureSchema {
  id: string;
  name: string;
  icon: ImageSchema;
  effects: EffectSchema[];
}
interface CreaturesData {
  creatures: CreatureSchema[];
}

const CREATURES_LIST = gql`
  {
    creatures(sort: "id:asc") {
      id
      name
      icon {
        url
      }
      effects {
        id
        name
      }
    }
  }
`;

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
      data?.creatures.filter((creature) => {
        return creature.effects.some((effect) => effect.id === id);
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
