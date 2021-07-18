import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { cn } from '@bem-react/classname';
import './Effects.scss';
import { Image } from '../Image';
import { ImageSchema } from '../Image/ImageSchema';

const cnEffects = cn('Effects');

export interface EffectSchema {
  id: string;
  name: string;
  image: ImageSchema;
  onChange?: () => void;
  className?: string;
}
interface EffectsData {
  effects: EffectSchema[];
}
interface EffectsI {
  onChange: (id: string) => void;
}

const EFFECTS_LIST = gql`
  {
    effects(sort: "id:asc") {
      id
      name
      image {
        url
      }
    }
  }
`;

const EffectItem: React.FC<EffectSchema> = ({
  name,
  className,
  image,
  onChange,
}) => {
  return (
    <button className={className} type="button" onClick={onChange}>
      <span className={cnEffects('Label')}>{name}</span>
      <Image url={image.url} />
    </button>
  );
};

export const Effects: React.FC<EffectsI> = ({ onChange }) => {
  const { loading, error, data } = useQuery<EffectsData>(EFFECTS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={cnEffects()}>
      <header>
        Фильтр по эффектам
        <button type="button">сбросить</button>
      </header>
      <ul className={cnEffects('List')}>
        {data &&
          data.effects.map((effect: EffectSchema) => (
            <EffectItem
              key={effect.id}
              id={effect.id}
              name={effect.name}
              onChange={() => onChange(effect.id)}
              className={cnEffects('Item')}
              image={effect.image}
            />
          ))}
      </ul>
    </div>
  );
};
